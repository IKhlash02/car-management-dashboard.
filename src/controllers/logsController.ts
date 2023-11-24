import { Request, Response } from "express";
import LogService from "../services/logs";

const get = async (req: Request, res: Response) => {
  try {
    const getLog = await new LogService().getLogs();

    res.json(getLog);
  } catch (error: any) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = { get };
