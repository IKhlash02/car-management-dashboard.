import UserRepository from "../repositories/users";
import { Request } from "express";

interface Payload {
  email: string;
  password: string;
  id_role: number;
}

export default class UserService {
  #userRepository: UserRepository;

  constructor() {
    this.#userRepository = new UserRepository();
  }

  async post(params: Payload) {
    return await this.#userRepository.post(params);
  }

  async get(email: string) {
    return await this.#userRepository.get(email);
  }

  async getById(params: number | string) {
    return await this.#userRepository.getByPk(params);
  }
}
