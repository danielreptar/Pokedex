import React, { useEffect, useLayoutEffect } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SectionContainer } from "../assets/styles/views/home";
import PokemonCards from "../components/PokemonCards/PokemonCards";
import { getData } from "../redux/ducks/pokemons";

export const Home = () => {
  const dispatch = useDispatch();

  const getPokemons = useCallback(() => {
    dispatch(getData());
  }, [dispatch]);
  const loadMore = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      getPokemons();
    }
  }, [getPokemons]);

  useLayoutEffect(() => {
    window.addEventListener("scroll", loadMore);
    return () => {
      window.removeEventListener("scroll", loadMore);
    };
  }, [loadMore]);
  useEffect(() => {
    getPokemons();
  }, [getPokemons]);
  return (
    <SectionContainer>
      <PokemonCards />
    </SectionContainer>
  );
};
