import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  ContentContainer,
  LayoutContainer,
  HeaderMenu,
  LogoHeader,
  BurgerButton,
} from "../../assets/styles/components/Layout";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import PokemonLogo from "../../assets/images/logo.png";
import Menu from "../../assets/icons/Menu.svg";
import { useHistory } from "react-router-dom";
import { toggleSidebar } from "../../redux/ducks/pokemons";

export const Layout = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);
  return (
    <>
      <LayoutContainer>
        <HeaderMenu>
          <BurgerButton onClick={handleClick}>
            <img src={Menu} alt="Menu icon" />
          </BurgerButton>
          <LogoHeader
            src={PokemonLogo}
            alt="Logo"
            onClick={() => history("/")}
          />
          <div />
        </HeaderMenu>
        <Sidebar />
        <ContentContainer>
          <Header />
          {children}
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};
