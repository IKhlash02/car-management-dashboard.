import { Request, Response } from "express";
import UserService from "../services/users";

const { v4: uuidv4 } = require("uuid");
const encryptPassword = require("./../utilities/encryptpassword");
const checkPassword = require("./../utilities/checkPassword");

const register = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password || "";

  const encryptedPassword = await encryptPassword(password);
  const isPassCorect = await checkPassword(encryptedPassword, password);

  const newUser = {
    email,
    password: encryptedPassword,
  };

  try {
    const postUser = await new UserService().post(newUser);

    return res.status(201).json({
      message: "Success",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const login = async (req: Request, res: Response) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  const user = await new UserService().get(email);

  if (!user) {
    return res.status(404).json({
      data: "Email is not exist, try another one",
    });
  }

  const passwordChecked = await new checkPassword(user.password, password);

  if (!passwordChecked) {
    return res.status(404).json({
      message: "Password is Wrong, try again",
      data: [],
    });
  }

  return res.status(200).json({
    status: 200,
    message: "Succesduly Logged In",
  });
};

module.exports = { register, login };
