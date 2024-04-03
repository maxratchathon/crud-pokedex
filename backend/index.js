const express = require("express");
const app = express();
const axios = require("axios");
const { connectDB } = require("./db/connectDB");
const PORT = 8000;
const Pokemons = require("./schema/PokemonSchema.js");
const cors = require("cors");

connectDB();
app.use(express.json());
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

app.post("/api/pokemon", async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    const pokemons = await Pokemons.create(req.body);
    res.status(200).json({ message: "added successfully" });
  } catch (error) {
    console.log(`error occur ${error}`);
  }
});

app.delete("/api/pokemon/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedPokemon = await Pokemons.deleteOne({ _id: id });
    if (deletedPokemon.deletedCount == 1) {
      res.status(200).json({ message: "Deleted Successfully" });
    } else {
      res.status(400).json({ error: "can not delete, pokemon not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`successfully connected to server, listening on port ${PORT}`);
  } else {
    console.log(`error occur: ${error}`);
  }
});
