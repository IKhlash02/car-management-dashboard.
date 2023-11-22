import { Request, Response } from "express";
import UserService from "../services/users";

const { v4: uuidv4 } = require("uuid");
const encryptPassword = require("./../utilities/encryptpassword");
const checkPassword = require("./../utilities/checkPassword");

const register = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  const encryptedPassword = await encryptPassword(password);
  const isPassCorect = await checkPassword(encryptedPassword, password);

  const newUser = {
    email,
    password: encryptedPassword,
  };

  try {
    const postUser = await new UserService().post(newUser);

    return res.status(201).json(postUser);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = { register };
