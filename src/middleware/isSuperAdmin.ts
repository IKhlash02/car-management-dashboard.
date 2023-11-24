import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserService from "../services/users";
//@ts-ignore
const isSuperAdmin = async (req: Request, res: Response, next) => {
  try {
    const bearerToken = req.headers.authorization;

    const token = bearerToken?.split("Bearer ")?.[1] || "";

    const tokenPayload = jwt.verify(token, process.env.SIGNATURE_KEY || "Rahasia");

    //@ts-ignore

    const role: any = await new UserService().getRole(tokenPayload.id);
    if (role.role !== "superadmin") {
      return res.status(401).json({
        message: "Kamu bukan superadmin",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = isSuperAdmin;
