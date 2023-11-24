import { Model, ModelObject } from "objection";

export class LogModel extends Model {
  log_id!: number;
  activities!: string;
  user_email!: string;
  car_name!: string;

  static get tableName() {
    return "log_activities";
  }
  static get idColumn() {
    return "log_id";
  }
}

export type carBrands = ModelObject<LogModel>;
