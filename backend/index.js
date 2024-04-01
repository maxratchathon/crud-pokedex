const express = require("express");
const app = express();
const axios = require("axios");
const { connectDB } = require("./db/connectDB");
const PORT = 8000;
const Pokemons = require("./schema/PokemonSchema.js");
const cors = require("cors");

connectDB();

app.use(cors());

app.get("/api/pokemon", async (req, res) => {
  try {
    const pokemons = await Pokemons.find({});
    res.status(200).json(pokemons);
  } catch (error) {
    console.error("Error reading Pokemon data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`successfully connected to server, listening on port ${PORT}`);
  } else {
    console.log(`error occur: ${error}`);
  }
});
