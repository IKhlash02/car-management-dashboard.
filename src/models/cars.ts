import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id_car!: number;
  car_name!: string;
  availability!: boolean;
  type!: string;
  brand!: string;
  capacity!: number;
  image_url!: string;
  price!: number;
  desc!: string;

  static get tableName() {
    return "cars";
  }
  static get idColumn() {
    return "id_car";
  }
}

export type carBrands = ModelObject<CarsModel>;
