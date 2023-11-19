import { Knex } from "knex";

const carBrands = "car_brands";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(carBrands, (table: Knex.TableBuilder) => {
    table.increments("id_car_brand").primary();
    table.string("name", 100).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(carBrands);
}
