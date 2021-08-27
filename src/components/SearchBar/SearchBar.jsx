import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../../assets/icons/Search.svg";
import {
  Background,
  ButtonIcon,
  InputStyled,
  InputWrapper,
} from "../../assets/styles/components/search";
import { changeSearch } from "../../redux/ducks/pokemons";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const search = useSelector((state) => state.pokemons.search);
  const handleChange = useCallback(
    (search) => {
      dispatch(changeSearch(search));
    },
    [dispatch]
  );
  const handleChangePage = (search) => {
    if (!search) {
      return;
    }
    const path = `/pokemon/${search}`;
    history.push(path);
    handleChange("");
  };
  const handleKeyPress = (event, search) => {
    if (event.keyCode === 13) {
      handleChangePage(search);
    }
  };
  return (
    <InputWrapper>
      <InputStyled
        value={search}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search"
        onKeyDown={(event) => handleKeyPress(event, search)}
        type="text"
      />
      <ButtonIcon onClick={() => handleChangePage(search)}>
        <img src={Search} alt="Search icon" />
      </ButtonIcon>
      <Background />
    </InputWrapper>
  );
};
