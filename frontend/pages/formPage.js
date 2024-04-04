import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const FormPage = () => {
  const router = useRouter();
  const { pokemonId } = router.query;

  const [pokemonData, setPokemonData] = useState({
    img: "",
    num: "",
    name: "",
    img: "",
    type: [],
    height: "",
    weight: "",
    candy: "",
    egg: "",
    multipliers: [],
    weaknesses: [],
    candy_count: 0,
    spawn_chance: 0,
    avg_spawns: 0,
    //prev_evolution: [{ num: "", name: "" }],
    //next_evolution: [{ num: "", name: "" }],
  });

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/pokemon/${pokemonId}`
        );
        console.log(response.data);
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    if (pokemonId) {
      fetchPokemonData();
    }
  }, [pokemonId]);

  const handleInputChange = (e, index, key, subKey) => {
    const { name, value } = e.target;
    if (key === "prev_evolution" || key === "next_evolution") {
      const updatedEvolutions = [...pokemonData[key]];
      updatedEvolutions[index][subKey] = value;
      setPokemonData({
        ...pokemonData,
        [key]: updatedEvolutions,
      });
    }
    if (name === "type") {
      setPokemonData({
        ...pokemonData,
        [name]: value.split(",").map((type) => type.trim()),
      });
    } else {
      setPokemonData({
        ...pokemonData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/api/pokemon/${pokemonId}`,
        pokemonData
      );
      router.back();
      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Error updating Pokémon:", error);
    }
  };

  const onCancel = async () => {
    try {
      console.log("routing back");
      router.back();
    } catch {
      console.log(`cancel error: ${error}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="mb-4 text-2xl font-bold">Update Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold">image url:</label>
          <input
            type="text"
            name="img"
            value={pokemonData.img}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>{" "}
        <div className="mb-4">
          <label className="block mb-2 font-bold">Name:</label>
          <input
            type="text"
            name="name"
            value={pokemonData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>{" "}
        <div className="mb-4">
          <label className="block mb-2 font-bold">Number (3 digits):</label>
          <input
            type="text"
            name="num"
            value={pokemonData.num}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Type:</label>
          <input
            type="text"
            name="type"
            value={pokemonData.type.join(",")}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Height:</label>
          <input
            type="text"
            name="height"
            value={pokemonData.height}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Weight:</label>
          <input
            type="text"
            name="weight"
            value={pokemonData.weight}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Candy:</label>
          <input
            type="text"
            name="candy"
            value={pokemonData.candy}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Egg:</label>
          <input
            type="text"
            name="egg"
            value={pokemonData.egg}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Multipliers:</label>
          <input
            type="String"
            name="multipliers"
            value={pokemonData.multipliers}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Weaknesses:</label>
          <input
            type="String"
            name="weaknesses"
            value={pokemonData.weaknesses}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Candy Count:</label>
          <input
            type="Number"
            name="candy_count"
            value={pokemonData.candy_count}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Spawn Chance:</label>
          <input
            type="Number"
            name="spawn_chance"
            value={pokemonData.spawn_chance}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block mb-2 font-bold">Previous Evolution:</label>
          {pokemonData.prev_evolution.map((evolution, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                name={`prev_evolution_num_${index}`}
                value={evolution.num}
                onChange={(e) =>
                  handleInputChange(e, index, "prev_evolution", "num")
                }
                className="w-full p-2 mr-2 border border-gray-300 rounded-md"
                placeholder="Num"
              />
              <input
                type="text"
                name={`prev_evolution_name_${index}`}
                value={evolution.name}
                onChange={(e) =>
                  handleInputChange(e, index, "prev_evolution", "name")
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Name"
              />
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Next Evolution:</label>
          {pokemonData.next_evolution.map((evolution, index) => {
            <div key={index} className="flex mb-2">
              <input
                type="text"
                name="next_evolution_num"
                value={evolution.num}
                onChange={(e) =>
                  handleInputChange(e, index, "next_evolution", "num")
                }
                className="w-full p-2 mr-2 border border-gray-300 rounded-md"
                placeholder="Num"
              />
              <input
                type="text"
                name="next_evolution_name"
                value={evolution.name}
                onChange={(e) =>
                  handleInputChange(e, index, "next_evolution", "name")
                }
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Name"
              />
            </div>;
          })} 
        </div> */}
        <div className="flex gap-5 mb-10">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Update Pokemon
          </button>
          {/* <button
            onClick={onCancel}
            className="px-4 py-2 font-bold text-white bg-gray-500 rounded-md hover:bg-blue-600"
          >
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default FormPage;
