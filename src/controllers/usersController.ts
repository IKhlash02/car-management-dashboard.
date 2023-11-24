import { Request, Response } from "express";
import UserService from "../services/users";
import jwt from "jsonwebtoken";
import CarService from "../services/cars";

const { v4: uuidv4 } = require("uuid");
const encryptPassword = require("./../utilities/encryptpassword");
const checkPassword = require("./../utilities/checkPassword");

interface UserPayload {
  id: number;
  email: string;
}

const createToken = (payload: UserPayload) => {
  return jwt.sign(payload, process.env.SIGNATURE_KEY || "Rahasia");
};

const register = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password || "";

  const encryptedPassword = await encryptPassword(password);
  const isPassCorect = await checkPassword(encryptedPassword, password);

  const newUser = {
    email,
    password: encryptedPassword,
    id_role: 3,
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

  const token = createToken({
    id: user.id,
    email: user.email,
  });

  return res.status(200).json({
    status: 200,
    message: "Succesduly Logged In",
    token,
  });
};

const getUserProfile = (req: Request, res: Response) => {
  //@ts-ignore
  res.status(200).json(req.user);
};

const getRole = async (req: Request, res: Response) => {
  //@ts-ignore
  const role: any = await new UserService().getRole(11);

  return res.json({ role_name: role.role });
};

const editRoleToAdmin = async (req: Request, res: Response) => {
  const id = req.body.id;

  const addAdmin = await new UserService().addAdmin(id, 2);

  return res.json({ message: "Succsessfully to edit role to admin" });
};

module.exports = {
  register,
  login,
  getUserProfile,
  getRole,
  editRoleToAdmin,
};
