import axios from "axios";
import React from "react";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Pokemons from "../../backend/schema/PokemonSchema";

const PokemonCard = ({ pokemon }) => {
  async function onDelete() {
    console.log("clicked on delete");
    try {
      console.log("pokemon id:", pokemon._id);
      const response = await axios.delete(
        `http://localhost:8000/api/pokemon/${pokemon._id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative flex flex-col justify-start items-center bg-white border  rounded-[15px] shadow-lg p-6 w-[350px] h-[550px]">
      <img src={pokemon.img} className="w-[150px] " />
      <h2 className="mb-2 text-xl font-semibold">
        {pokemon.num}. {pokemon.name}
      </h2>
      <div className="w-[100%] flex flex-col ">
        <p className="text-gray-600">
          <span className="font-bold">Type: </span>
          {pokemon.type.toString()}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Height: </span> {pokemon.height}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Weight: </span> {pokemon.weight}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Egg: </span> {pokemon.egg}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Multipliers: </span> {pokemon.multipliers}
        </p>
        <p className="text-gray-600 whitespace-wrap">
          <span className="font-bold">Weaknesses: </span>{" "}
          {pokemon.weaknesses.join(", ")}
        </p>
        {pokemon.prev_evolution.length != 0 ? (
          <p className="text-gray-600 whitespace-wrap">
            <span className="font-bold">Previous Evolution: </span>{" "}
            {pokemon.prev_evolution.join(", ")}
          </p>
        ) : null}
        {pokemon.next_evolution.length != 0 ? (
          <p className="text-gray-600 whitespace-wrap">
            <span className="font-bold">Next Evolution: </span>{" "}
            {pokemon.next_evolution.join(", ")}
          </p>
        ) : null}
        <p className="text-gray-600 whitespace-wrap">
          <span className="font-bold">Candy: </span> {pokemon.candy}{" "}
          {pokemon.candy_count ? " : " + pokemon.candy_count : null}
        </p>
        <p className="text-gray-600 whitespace-wrap">
          <span className="font-bold">Spawn Chance: </span>{" "}
          {pokemon.spawn_chance} % ( at {pokemon.spawn_time} )
        </p>
        <p className="text-gray-600 whitespace-wrap">
          <span className="font-bold">Average Spawns: </span>{" "}
          {pokemon.avg_spawns}
        </p>

        <div className="">
          <div className="absolute flex justify-end bottom-5 right-5 ">
            <MdEditDocument size={30} className="text-gray-600" />
            <MdDeleteForever
              onClick={onDelete}
              size={30}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
