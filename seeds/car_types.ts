import { Knex } from "knex";

const carTypes = "car_types";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(carTypes).del();

  // Inserts seed entries
  await knex(carTypes).insert([{ name: "Sedan" }, { name: "Convertible" }, { name: "Hatchback" }]);
}
