import React from "react";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon.type);
  return (
    <div className="flex bg-white rounded-lg shadow-md p-6 w-[1000px]">
      <img src={pokemon.img} className="w-[100px]" />
      <div>
        <h2 className="text-xl font-semibold mb-2">
          {pokemon.num}. {pokemon.name}
        </h2>
        <p className="text-gray-600">Type: {pokemon.type.toString()}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
