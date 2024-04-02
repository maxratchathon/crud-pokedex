import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.type}</p>
      <p>HP: {pokemon.hp}</p>
      <img src={pokemon.img} />
    </div>
  );
};

export default PokemonCard;
