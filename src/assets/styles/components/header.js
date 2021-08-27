import styled from "styled-components";
import { deviceMF } from "../breakPoints";
import { BLUE, SHADOW } from "../variables";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0.8rem 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${deviceMF.mobileL} {
    padding: 1.4rem 2.5rem;
  }
`;
export const ButtonIcon = styled.button`
  background-color: ${BLUE};
  width: 55px;
  height: 39px;
  right: 0;
  top: 0;
  cursor: pointer;
  border-radius: 500px;
  box-shadow: 0 3px 6px 0 ${SHADOW};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  &:active {
    transform: scale(0.97);
  }
`;
