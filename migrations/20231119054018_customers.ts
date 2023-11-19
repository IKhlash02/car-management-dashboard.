import { Knex } from "knex";

const customers = "customers";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(customers, (table: Knex.TableBuilder) => {
    table.increments("id_customer").primary();
    table.integer("id_car").notNullable;
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("photo", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(customers);
}
