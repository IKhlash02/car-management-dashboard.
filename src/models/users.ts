import { Model, ModelObject, RelationMapping } from "objection";
import { RolesModel } from "./roles";

export class UsersModel extends Model {
  id!: number;
  email!: string;
  password!: string;
  id_role!: number;

  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      roles: {
        relation: Model.HasOneRelation,
        modelClass: RolesModel,
        join: {
          from: "users.id_role",
          to: "roles.id",
        },
      },
    };
  }
}

export type carBrands = ModelObject<UsersModel>;
