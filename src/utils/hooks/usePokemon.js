import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { api_get } from "../../services/api";

export function usePokemon(id) {
  const [pokemon, setPokemon] = useState(null);
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  const getPokemon = async (id) => {
    let pokemonFinded = pokemons.find((pokemon) => pokemon.id === id);
    if (!pokemonFinded) {
      try {
        pokemonFinded = await api_get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
      } catch (error) {
        console.log(error);
      }
    }

    setPokemon(pokemonFinded);
  };

  useEffect(
    () => {
      getPokemon(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  return { pokemon };
}
