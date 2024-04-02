import React from "react";
import PokemonCard from "./PokemonCard";
import { FaPlusCircle } from "react-icons/fa";

const PokemonList = ({ pokemonData }) => {
  return (
    <div className="flex flex-col mx-auto px-4">
      <div className="">
        <h1 className="text-3xl text-center m-10 font-bold mb-10">
          CRUD Pokedex
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 lg:w-[150vh] justify-center">
        {pokemonData && pokemonData.length > 0 ? (
          pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <p>No Pokemon found.</p>
        )}
        <div className="w-[350px] h-[550px] flex flex-col justify-center gap-5 items-center bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
          <FaPlusCircle size={50} className="text-gray-600" />
          <p className="text-gray-600 ">Add a new Pokemon</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
