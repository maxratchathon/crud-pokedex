import React from "react";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="flex flex-col justify-start items-center bg-white rounded-lg shadow-lg p-6 w-[300px] h-[400px]">
      <img src={pokemon.img} className="w-[150px]" />
      <div>
        <h2 className="text-xl font-semibold mb-2">
          {pokemon.num}. {pokemon.name}
        </h2>
        <p className="text-gray-600">Type: {pokemon.type.toString()}</p>
        <p className="text-gray-600">Height: {pokemon.height}</p>
        <p className="text-gray-600">Weight: {pokemon.weight}</p>
        <p className="text-gray-600">Egg: {pokemon.egg}</p>
        <p className="text-gray-600">Multipliers: {pokemon.multipliers}</p>
        <p className="text-gray-600">
          Weaknesses: {pokemon.weaknesses.toString()}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
