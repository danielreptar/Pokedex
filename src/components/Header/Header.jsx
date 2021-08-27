import React from "react";
import { HeaderContainer } from "../../assets/styles/components/header";
import { SearchBar } from "../SearchBar/SearchBar";
import Back from "../../assets/icons/Back.svg";
import { ButtonIcon } from "../../assets/styles/components/header";
import { useHistory, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const history = useHistory();
  return (
    <HeaderContainer>
      <div>
        {location.pathname !== "/" && (
          <ButtonIcon onClick={() => history.push("/")}>
            <img src={Back} alt="Back icon" />
          </ButtonIcon>
        )}
      </div>

      <SearchBar />
    </HeaderContainer>
  );
};
