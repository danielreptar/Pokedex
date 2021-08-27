import React, { useCallback } from "react";
import {
  ActionsContainer,
  Avatar,
  Logo,
  SidebarContainer,
  UserDescription,
  UserLevel,
  Username,
  UserSection,
  TextButtonWrapper,
  Icon,
  CloseIcon,
} from "../../assets/styles/components/sidebar";

//images
import PokemonLogo from "../../assets/images/logo.png";
import User from "../../assets/images/avatar.png";
import { Button } from "../Button/Button";
import Logout from "../../assets/icons/Logout.svg";
import Delete from "../../assets/icons/Delete.svg";
import { useHistory } from "react-router-dom";
import { toggleSidebar } from "../../redux/ducks/pokemons";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.pokemons.showSidebar);
  const handleClick = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);
  return (
    <SidebarContainer isShow={showSidebar}>
      <Logo src={PokemonLogo} alt="Logo" onClick={() => history("/")} />
      <CloseIcon onClick={handleClick} src={Delete} alt="Delete icon" />
      <UserSection>
        <Avatar src={User} alt="User image" />
        <Username>ASHK123</Username>
        <UserLevel>Level 1</UserLevel>

        <UserDescription>"Work hard on your test"</UserDescription>
      </UserSection>

      <ActionsContainer>
        <Button>
          <TextButtonWrapper>
            <Icon src={Logout} alt="Logout icon" />
            <span>LOG OUT</span>
            <div />
          </TextButtonWrapper>
        </Button>
      </ActionsContainer>
    </SidebarContainer>
  );
};
