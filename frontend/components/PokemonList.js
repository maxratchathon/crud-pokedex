import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <div>
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
