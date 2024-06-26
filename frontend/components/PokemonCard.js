import axios from "axios";
import React from "react";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import Link from "next/link";

const PokemonCard = ({ pokemon, onOpenModal }) => {
  async function onEdit() {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/pokemon/${pokemon._id}`
      );
    } catch (error) {
      console.log(`error occur: ${error}`);
    }
  }

  return (
    <div className=" relative flex flex-col justify-start items-center bg-white border  rounded-[15px] shadow-lg p-6 w-[350px] h-[550px]">
      <img
        src={pokemon.img}
        className="w-[150px] hover:animate-jump animate-duration-[2000ms] animate-ease-in-out animate-normal"
      />
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
        {pokemon.multipliers ? (
          <p className="text-gray-600">
            <span className="font-bold">Multipliers: </span>{" "}
            {pokemon.multipliers}
          </p>
        ) : null}

        <p className="text-gray-600 whitespace-wrap">
          <span className="font-bold">Weaknesses: </span>{" "}
          {pokemon.weaknesses.join(", ")}
        </p>
        {/* {pokemon.prev_evolution.length !== 0 ? (
          <p className="text-gray-600 whitespace-wrap">
            <span className="font-bold">Previous Evolution: </span>{" "}
            {pokemon.prev_evolution.map((evolution, index) => (
              <span key={index}>
                {evolution.name}
                {index !== pokemon.prev_evolution.length - 1 && ", "}
              </span>
            ))}
          </p>
        ) : null}

        {pokemon.next_evolution.length !== 0 ? (
          <p className="text-gray-600 whitespace-wrap">
            <span className="font-bold">Next Evolution: </span>{" "}
            {pokemon.next_evolution.map((evolution, index) => (
              <span key={index}>
                {evolution.name}
                {index !== pokemon.next_evolution.length - 1 && ", "}
              </span>
            ))}
          </p>
        ) : null} */}

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
            <Link
              href={{
                pathname: "/formPage",
                query: { pokemonId: pokemon._id },
              }}
            >
              <MdEditDocument
                onClick={onEdit}
                size={30}
                className="text-gray-600"
              />
            </Link>
            <MdDeleteForever
              onClick={() => {
                onOpenModal(pokemon);
              }}
              size={30}
              className="text-gray-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
