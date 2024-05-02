import React from "react";
import PokemonCard from "./PokemonCard";
import { FaPlusCircle } from "react-icons/fa";
import { Button, Typography, Grid } from "@mui/material"; // Import Material-UI components
import { useRouter } from "next/router";

const PokemonList = ({ pokemonData, onOpenModal }) => {
  const router = useRouter();

  async function onAdd() {
    router.push("/addFormPage");
  }

  return (
    <div className="flex flex-col px-4 mx-auto">
      <div className="">
        <Typography variant="h4" align="center" gutterBottom>
          CRUD Pokedex
        </Typography>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {pokemonData && pokemonData.length > 0 ? (
          pokemonData.map((pokemon) => (
            <Grid item key={pokemon._id} xs={12} sm={6} md={4} lg={3}>
              <PokemonCard pokemon={pokemon} onOpenModal={onOpenModal} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No Pokemon found.</Typography>
        )}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            onClick={onAdd}
            className="flex flex-col items-center justify-center w-full h-full gap-5 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md cursor-pointer hover:animate-shake"
          >
            <FaPlusCircle size={50} className="text-gray-600" />
            <Typography variant="body1" className="text-gray-600">
              Add a new Pokemon
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PokemonList;
