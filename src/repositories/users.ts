import { UsersModel } from "../models/users";

interface Payload {
  email: string;
  password: string;
  id_role: number;
}

export default class UserRepository {
  async post(params: Payload) {
    return await UsersModel.query().insert(params).returning("*");
  }

  async get(email: string) {
    return await UsersModel.query().findOne({ email: email }).returning("*");
  }

  async getByPk(params: number | string) {
    return await UsersModel.query().findById(params).returning("*");
  }
}
