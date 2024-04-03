import React from "react";
import PokemonCard from "./PokemonCard";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";

const PokemonList = ({ pokemonData, onOpenModal }) => {
  const router = useRouter();
  async function onAdd() {
    router.push("/addFormPage");
  }

  return (
    <div className="flex flex-col px-4 mx-auto">
      <div className="">
        <h1 className="m-10 mb-10 text-3xl font-bold text-center">
          CRUD Pokedex
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 lg:w-[150vh] justify-center">
        {pokemonData && pokemonData.length > 0 ? (
          pokemonData.map((pokemon) => (
            <PokemonCard
              key={pokemon._id}
              pokemon={pokemon}
              onOpenModal={onOpenModal}
            />
          ))
        ) : (
          <p>No Pokemon found.</p>
        )}
        <div
          onClick={onAdd}
          className="hover:animate-shake w-[350px] h-[550px] flex flex-col justify-center gap-5 items-center bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200"
        >
          <FaPlusCircle size={50} className="text-gray-600" />
          <p className="text-gray-600 cursor-pointer ">Add a new Pokemon</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
