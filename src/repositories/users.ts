import { UsersModel } from "../models/users";

interface Payload {
  email: string;
  password: string;
}

export default class UserRepository {
  async post(params: Payload) {
    return await UsersModel.query().insert(params).returning("*");
  }

  async get(email: string) {
    return await UsersModel.query().findOne({ email: email }).returning("*");
  }
}
