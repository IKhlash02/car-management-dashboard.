import { Knex } from "knex";

const users = "users";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(users, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("email", 255).notNullable().unique();
    table.string("password", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(users);
}
