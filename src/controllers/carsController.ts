import { Request, Response } from "express";
import { carsModel } from "../models/cars";
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djabqh6nm",
  api_key: "855277189971216",
  api_secret: "rAW1hQDdQwIP-jpzfxyHxsei-SE",
});

const get = async (req: Request, res: Response) => {
  try {
    const getCars = (await carsModel.query()) || [];
    res.status(200).json(getCars);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const reqBody = req.body;
    //@ts-ignore
    if (!req.file) {
      return res.status(400).json({ message: "The file has not been uploaded" });
    }
    //@ts-ignore
    const filebase64 = req.file.buffer.toString("base64");
    //@ts-ignore
    const file = `data:${req.file.mimetype};base64,${filebase64}`;

    //@ts-ignore
    cloudinary.uploader.upload(file, async (err, result) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const newCar = {
        ...reqBody,
        image_url: result.url,
        availability: true,
        id_car: Math.floor(Math.random() * 100000000),
      };

      const postCar = await carsModel.query().insert(newCar);

      return res.status(201).json(postCar);
    });
  } catch (error: any) {
    res.status(500).json({ message: error });
  }

  //@ts-ignore
};

const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const getData = await carsModel.query().where("id_car", id).throwIfNotFound();
    return res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const reqParam = req.params;
    const id_car = Number(reqParam.id);

    const deleteData = await carsModel.query().where("id_car", id_car).del();

    return res.status(200).json({
      status: "OK",
      message: deleteData,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const reqBody = req.body;
    const reqParam = req.params;

    const id_car = Number(reqParam.id);

    // const car_name = reqBody;

    const update = await carsModel
      .query()
      .where("id_car", "=", id_car)
      .update({ ...reqBody });

    return res.json(update);
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
