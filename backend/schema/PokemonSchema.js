import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
  id: Number,
  num: Number,
  name: String,
  img: String,
  type: [String],
  height: Number,
  weight: Number,
  candy: String,
  egg: Number,
  multipliers: [Number],
  weaknesses: [String],
  candy_count: Number,
  spawn_chance: Number,
  avg_spawns: Number,
  prev_evolution: [{ num: Number }, { name: String }],
  next_evolution: [{ num: Number }, { name: String }],
});

const Pokemons = mongoose.model("Pokemons", pokemonSchema);
export default Pokemons;
