import { Model, ModelObject } from "objection";

export class carTypesModel extends Model {
  id_car_type!: number;
  name!: string;

  static get tableName() {
    return "car_types";
  }
}

export type carBrands = ModelObject<carTypesModel>;
