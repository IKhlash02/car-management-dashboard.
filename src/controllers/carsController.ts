import { Request, Response } from "express";
import CarService from "../services/cars";
import LogService from "../services/logs";
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djabqh6nm",
  api_key: "855277189971216",
  api_secret: "rAW1hQDdQwIP-jpzfxyHxsei-SE",
});

const get = async (req: Request, res: Response) => {
  try {
    const getCars = await new CarService().get();

    res.json({ getCars });
  } catch (error: any) {
    res.json({
      message: error.message,
    });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const reqBody = req.body;
    //@ts-ignore
    if (!req.file) {
      return { message: "The file has not been uploaded" };
    }
    //@ts-ignore
    const filebase64 = req.file.buffer.toString("base64");
    //@ts-ignore
    const file = `data:${req.file.mimetype};base64,${filebase64}`;

    //@ts-ignore
    cloudinary.uploader.upload(file, async (err, result) => {
      if (err) {
        return {
          message: err.message,
        };
      }

      const newCar = {
        ...reqBody,
        image_url: result.url,
        availability: true,
      };

      const postCar = await new CarService().post(newCar);

      //@ts-ignore
      const { email } = req.user;
      const activities = {
        activities: "CREATE",
        user_email: email,
        car_name: reqBody.car_name,
      };

      const addlogs = await new LogService().post(activities);

      return res.status(201).json({ postCar, addlogs });
    });
  } catch (error: any) {
    res.status(500).json({ message: error });
  }

  //@ts-ignore
};

const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const getData = await new CarService().getById(id);
    return res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const reqParam = req.params;
    const id_car = Number(reqParam.id);

    const car = await new CarService().getById(id_car);
    const car_name = car[0].car_name;
    const deleteData = await new CarService().deleteById(id_car);

    //@ts-ignore
    const { email } = req.user;
    const activities = {
      activities: "DELETE",
      user_email: email,
      car_name: car_name,
    };

    const addlogs = await new LogService().post(activities);

    return res.status(200).json({
      status: "OK",
      message: deleteData,
      logs: addlogs,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const reqBody = req.body;
    const id_car = Number(req.params.id);

    // const car_name = reqBody;

    const update = await new CarService().updateById(reqBody, id_car);
    const car = await new CarService().getById(id_car);
    const car_name = car[0].car_name;
    //@ts-ignore
    const { email } = req.user;
    const activities = {
      activities: "UPDATE",
      user_email: email,
      car_name: car_name,
    };

    const addlogs = await new LogService().post(activities);

    return res.json({ status: update, log: addlogs });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  get,
  post,
  getById,
  updateById,
  deleteById,
};
