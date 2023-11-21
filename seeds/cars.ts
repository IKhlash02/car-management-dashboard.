import { Knex } from "knex";

const cars = "cars";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(cars).del();

  // Inserts seed entries
  await knex(cars).insert([
    {
      car_name: "Toyota Corolla",
      availability: true,
      type: "sedan",
      brand: "toyota",
      capacity: 5,
      image_url: "https://i.pinimg.com/474x/69/f5/d3/69f5d35a55d65a0b6074f6d5aa861b93.jpg",
      price: 20000,
      desc: "Sedan yang nyaman dengan kinerja yang handal.",
    },
    {
      car_name: "Honda Civic",
      availability: false,
      type: "sedan",
      brand: "honda",
      capacity: 5,
      image_url: "https://i.pinimg.com/474x/1e/78/3d/1e783db25debf4cf69e1bc445b9a0400.jpg",
      price: 22000,
      desc: "Desain modern dengan teknologi terkini.",
    },
    {
      car_name: "Tesla Model 3",
      availability: true,
      type: "sedan",
      brand: "tesla",
      capacity: 5,
      image_url: "https://i.pinimg.com/474x/25/29/8b/25298b8bd7d5de394326ba50428d985a.jpg",
      price: 50000,
      desc: "Mobil listrik yang canggih dengan kinerja luar biasa.",
    },
  ]);
}
