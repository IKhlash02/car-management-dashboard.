import UserRepository from "../repositories/users";
import { Request } from "express";

interface Payload {
  email: string;
  password: string;
}

export default class UserService {
  #userRepository: UserRepository;

  constructor() {
    this.#userRepository = new UserRepository();
  }

  async post(params: Payload) {
    return await this.#userRepository.post(params);
  }
}
