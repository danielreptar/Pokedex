import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CardsContainer } from "../../assets/styles/components/cards";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonCards = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const search = useSelector((state) => state.pokemons.search);
  console.log(pokemons);
  const filterPokemons = (search, pokemons) => {
    return pokemons.filter((pokemon) =>
      Boolean(
        String(pokemon.id).includes(search) ||
          Boolean(pokemon.name.includes(search.toLowerCase()))
      )
    );
  };

  const filteredPokemons = useMemo(
    () => filterPokemons(search, pokemons),
    [search, pokemons]
  );

  return (
    <CardsContainer>
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardsContainer>
  );
};

export default PokemonCards;
