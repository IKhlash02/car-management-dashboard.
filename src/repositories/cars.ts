import { CarsModel } from "../models/cars";
import { Request, Response } from "express";

export default class CarsRepository {
  async get() {
    return (await CarsModel.query()) || [];
  }

  async post(req: Request, res: Response) {
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

      return await CarsModel.query().insert(newCar);
    });
  }

  async getById(req: Request) {
    const id = Number(req.params.id);
    return await CarsModel.query().where("id_car", id).throwIfNotFound();
  }
  async deleteById(req: Request, res: Response) {
    const reqParam = req.params;
    const id_car = Number(reqParam.id);

    return await CarsModel.query().where("id_car", id_car).del();
  }

  async updateById(req: Request) {
    const reqBody = req.body;
    const reqParam = req.params;

    const id_car = Number(reqParam.id);

    // const car_name = reqBody;

    return await CarsModel.query()
      .where("id_car", "=", id_car)
      .update({ ...reqBody });
  }
}
