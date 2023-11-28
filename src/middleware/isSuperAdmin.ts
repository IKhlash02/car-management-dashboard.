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

    const { role } = await new UserService().getRole(tokenPayload.id);
    if (role !== "superadmin") {
      return res.status(403).json({
        message: "You do not have permission to access this resource.",
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
