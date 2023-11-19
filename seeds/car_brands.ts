import { Knex } from "knex";

const carBrands = "car_brands";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(carBrands).del();

  // Inserts seed entries
  await knex(carBrands).insert([{ name: "Toyota" }, { name: "Nissan" }, { name: "Wuling" }]);
}
