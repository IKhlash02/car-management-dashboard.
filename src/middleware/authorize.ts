import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserService from "../services/users";
//@ts-ignore
const authorize = async (req: Request, res: Response, next) => {
  try {
    const bearerToken = req.headers.authorization;

    const token = bearerToken?.split("Bearer ")?.[1] || "";

    const tokenPayload = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia");

    //@ts-ignore
    req.user = await new UserService().getById(tokenPayload.id);

    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = authorize;
