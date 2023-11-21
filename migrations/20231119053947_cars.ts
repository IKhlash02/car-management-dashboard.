import { Knex } from "knex";

const cars = "cars";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(cars, (table: Knex.TableBuilder) => {
    table.increments("id_car").primary();
    table.string("car_name", 255).notNullable();
    table.boolean("availability").notNullable().defaultTo(false);
    table.string("type", 100).notNullable();
    table.string("brand", 100).notNullable();
    table.integer("capacity", 2).notNullable();
    table.string("image_url", 100).notNullable();
    table.integer("price", 50).notNullable();
    table.string("desc", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(cars);
}
