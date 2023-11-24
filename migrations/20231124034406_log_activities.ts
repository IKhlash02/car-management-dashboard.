import { Knex } from "knex";

const logs = "log_activities";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(logs, (table: Knex.TableBuilder) => {
    table.increments(" log_id").primary();
    table.string("activities", 100).notNullable();
    table.string("user_email", 100).notNullable();
    table.string("car_name", 100).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(logs);
}
