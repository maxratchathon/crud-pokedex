import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useSession, signIn, signOut } from "next-auth/react";
import DeleteModal from "../components/DeleteModal";
import { useRouter } from "next/router";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/pokemon");
        setPokemonData(response.data);
      } catch (error) {
        console.error("Failed to fetch Pokemon data", error);
        setError("Failed to fetch Pokemon data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  const handleOpenModal = (pokemon) => {
    setShowModal(true);
    setSelectedPokemon(pokemon);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (session) {
    return (
      <div className="flex flex-col justify-center">
        <NavBar />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {showModal && (
              <DeleteModal
                onCloseModal={handleCloseModal}
                pokemon={selectedPokemon}
              />
            )}
            <PokemonList
              pokemonData={pokemonData}
              onOpenModal={handleOpenModal}
            />
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-3xl">You are not signed in</h1>
        <div className="flex justify-center gap-5">
          <button
            className="px-4 py-2 text-white rounded bg-stone-500"
            onClick={() => signIn()}
          >
            Sign in
          </button>
          <button
            className="px-4 py-2 text-white rounded bg-stone-500"
            onClick={() => router.push("register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
