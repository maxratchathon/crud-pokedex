import React from "react";
import PokemonCard from "./PokemonCard";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";

const PokemonList = ({ pokemonData, onOpenModal }) => {
  const router = useRouter();
  async function onAdd() {
    const data = {
      id: 999,
      num: "024",
      name: "Arbok (test data)",
      img: "http://www.serebii.net/pokemongo/pokemon/024.png",
      type: ["Poison"],
      height: "3.51 m",
      weight: "65.0 kg",
      candy: "Ekans Candy",
      egg: "Not in Eggs",
      multipliers: null,
      weaknesses: ["Ground", "Psychic"],
      spawn_chance: 0.072,
      avg_spawns: 7.2,
      spawn_time: "01:50",
      prev_evolution: [{ num: "023", name: "Ekans" }],
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/pokemon",
        data
      );
      router.reload();
      console.log(`response: ${response}`);
    } catch (error) {
      console.log("error", error);
    }
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
          className="w-[350px] h-[550px] flex flex-col justify-center gap-5 items-center bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200"
        >
          <FaPlusCircle size={50} className="text-gray-600" />
          <p className="text-gray-600 ">Add a new Pokemon</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
