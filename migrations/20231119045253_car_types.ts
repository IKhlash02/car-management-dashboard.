import { Knex } from "knex";

const carTypes = "car_types";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(carTypes, (table: Knex.TableBuilder) => {
    table.increments("id_car_type").primary();
    table.string("name", 100).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(carTypes);
}
