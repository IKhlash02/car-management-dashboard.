import { Model, ModelObject } from "objection";

export class customersModel extends Model {
  id_customer!: number;
  id_car!: number;
  name!: string;
  email!: string;
  photo!: string;

  static get tableName() {
    return "cars";
  }
}

export type carBrands = ModelObject<customersModel>;
