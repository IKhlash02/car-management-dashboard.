import { CarsModel } from "../models/cars";
import { Request } from "express";

export default class CarRepository {
  async get() {
    return (await CarsModel.query()) || [];
  }

  async post(newCar: any) {
    return await CarsModel.query().insert(newCar);
  }

  async getById(id: number) {
    return await CarsModel.query().where("id_car", id).throwIfNotFound();
  }

  async deleteById(id_car: number) {
    return await CarsModel.query().where("id_car", id_car).del();
  }

  async updateById(reqBody: any, id_car: number) {
    return await CarsModel.query()
      .where("id_car", "=", id_car)
      .update({ ...reqBody });
  }
}
