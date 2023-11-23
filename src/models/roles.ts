import { Model, ModelObject } from "objection";

export class RolesModel extends Model {
  id!: number;
  role!: string;

  static get tableName() {
    return "roles";
  }
}

export type carBrands = ModelObject<RolesModel>;
