import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserService from "../services/users";
//@ts-ignore
const notMember = async (req: Request, res: Response, next) => {
  try {
    const bearerToken = req.headers.authorization;

    const token = bearerToken?.split("Bearer ")?.[1] || "";

    const tokenPayload = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia");

    //@ts-ignore

    const { role } = await new UserService().getRole(tokenPayload.id);

    //@ts-ignore
    req.user = await new UserService().getById(tokenPayload.id);
    if (role === "member") {
      return res.status(401).json({
        message: "Kamu bukan admin",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = notMember;
