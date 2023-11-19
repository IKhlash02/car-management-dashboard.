import { Model, ModelObject } from "objection";

export class carBrandsModel extends Model {
  id_car_brand!: number;
  name!: string;

  static get tableName() {
    return "car_brands";
  }
}

export type carBrands = ModelObject<carBrandsModel>;
