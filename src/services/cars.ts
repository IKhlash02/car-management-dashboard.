import CarRepository from "../repositories/cars";
import { Request } from "express";

export default class CarService {
  #carRepository: CarRepository;

  constructor() {
    this.#carRepository = new CarRepository();
  }

  async get() {
    return await this.#carRepository.get();
  }

  async getById(id: number) {
    return await this.#carRepository.getById(id);
  }

  async deleteById(id_car: number) {
    return await this.#carRepository.deleteById(id_car);
  }

  async updateById(reqBody: any, id_car: number) {
    return await this.#carRepository.updateById(reqBody, id_car);
  }

  async post(req: Request) {
    return await this.#carRepository.post(req);
  }
}
