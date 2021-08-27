import styled from "styled-components";
import { deviceMF } from "../breakPoints";
import { BLUE } from "../variables";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${deviceMF.tablet} {
    flex-direction: row;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 100vh;
  @media ${deviceMF.tablet} {
    margin-left: 320px;
  }
`;
export const HeaderMenu = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  background-color: ${BLUE};
  justify-content: space-between;
  align-items: center;
  @media ${deviceMF.tablet} {
    display: none;
  }
`;
export const LogoHeader = styled.img`
  width: 120px;
  margin-bottom: 0;
`;
export const BurgerButton = styled.button`
  background-color: transparent;
  width: 55px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  &:active {
    transform: scale(0.9);
  }
`;
