import { Request } from "express";
import LogsRepository from "../repositories/logs";

interface activities {
  activities: string;
  user_email: string;
  car_name: string;
}

export default class LogService {
  #logRepository: LogsRepository;

  constructor() {
    this.#logRepository = new LogsRepository();
  }

  async post(newActivities: activities) {
    return await this.#logRepository.post(newActivities);
  }

  async getLogs() {
    return await this.#logRepository.getLogs();
  }
}
