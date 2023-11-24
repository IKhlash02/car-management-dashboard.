import { LogModel } from "../models/logs";

interface activities {
  activities: string;
  user_email: string;
  car_name: string;
}

export default class LogsRepository {
  async post(newActivities: activities) {
    return await LogModel.query().insert(newActivities);
  }

  async getLogs() {
    return (await LogModel.query()) || [];
  }
}
