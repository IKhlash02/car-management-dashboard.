import { Knex } from "knex";
const encryptPassword = require("../src/utilities/encryptpassword");

const users = "users";

export async function seed(knex: Knex): Promise<void> {
  const encryptedPassword = await encryptPassword("12345678");

  // Deletes ALL existing entries
  await knex(users).del();

  // Inserts seed entries
  await knex(users).insert([
    {
      id: 1,
      email: "superadmin@gmail.com",
      password: encryptedPassword,
      id_role: 1,
    },
  ]);
}
