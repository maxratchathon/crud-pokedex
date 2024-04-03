const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  num: String,
  name: String,
  img: String,
  type: [String],
  height: String,
  weight: String,
  candy: String,
  egg: String,
  multipliers: [Number],
  weaknesses: [String],
  candy_count: Number,
  spawn_chance: Number,
  avg_spawns: Number,
  prev_evolution: [{ num: String }, { name: String }],
  next_evolution: [{ num: String }, { name: String }],
});

const Pokemons = mongoose.model("Pokemons", pokemonSchema);
module.exports = Pokemons;


