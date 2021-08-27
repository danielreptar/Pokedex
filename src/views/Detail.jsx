import React from "react";
import { useParams } from "react-router-dom";
import { SectionContainer } from "../assets/styles/views/detail";
import InfoCard from "../components/InfoCard/InfoCard";
import PokemonSpriteCard from "../components/PokemonSpriteCard/PokemonSpriteCard";
import { usePokemon } from "../utils/hooks/usePokemon";

export const Detail = () => {
  const { id } = useParams();
  const { pokemon } = usePokemon(id);

  return (
    <SectionContainer>
      {pokemon ? (
        <>
          <PokemonSpriteCard pokemon={pokemon} />
          <InfoCard pokemon={pokemon} />
        </>
      ) : (
        <h1>No encontrado</h1>
      )}
    </SectionContainer>
  );
};
