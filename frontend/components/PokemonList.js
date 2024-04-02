import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Pokemon List</h1>
      <div className="flex flex-wrap gap-10">
        {pokemonData && pokemonData.length > 0 ? (
          pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>No Pokemon found.</p>
        )}
        <div className="w-[300px] h-[400px] flex justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-600">Add a new Pokemon</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
