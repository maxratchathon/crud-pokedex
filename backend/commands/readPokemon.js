import { connectDB, disconnectDB } from "../db/connectDB.js";
import Pokemons from "../schema/PokemonSchema.js";

export default async function readPokemon() {
  try {
    await connectDB();
    await console.log("start reading pokemon");

    const pokemons = await Pokemons.find({});

    pokemons.forEach((pokemon) => {
      console.log(pokemon);
    });
    console.log(pokemons);

    await disconnectDB();
  } catch (error) {
    console.log(`error occur while reading: ${error}`);
  }
}

readPokemon();
