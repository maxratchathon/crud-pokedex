import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import axios from "axios";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/pokemon");
        setPokemonData(response.data);
      } catch (error) {
        console.error("Failed to fetch Pokemon data", error);
        setError("Failed to fetch Pokemon data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <h1>Welcome to Pokemon CRUD App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <PokemonList pokemonData={pokemonData} />
      )}
    </div>
  );
};

export default Home;
