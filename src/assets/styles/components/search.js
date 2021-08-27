import styled from "styled-components";
import { deviceMF } from "../breakPoints";
import { BLUE, DARK_PURPLE, DETAIL_BLUE, SHADOW, WHITE } from "../variables";

export const InputWrapper = styled.div`
  max-width: 240px;
  margin: 0.3rem;

  padding: 0.6rem 1rem;
  padding-right: 60px;
  display: flex;
  background-color: ${WHITE};
  border-radius: 500px;
  position: relative;
  box-shadow: 0 3px 6px 0 ${SHADOW};
  @media ${deviceMF.mobileL} {
    max-width: 340px;
    margin: 0.8rem;
  }
  @media ${deviceMF.tablet} {
    margin: 1.2rem;
  }
`;
export const InputStyled = styled.input`
  border: 0px;
  background: transparent;
  outline: none;
  width: 180px;
  color: ${DARK_PURPLE};
  font-size: 1rem;
  @media ${deviceMF.mobileL} {
    width: 280px;
  }
`;

export const Background = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0;
  pointer-events: none;
  border-radius: inherit;
  transition: all 0.25s ease;
  border: 1px solid ${DETAIL_BLUE};

  ${InputStyled}:focus ~ & {
    border: 1px solid ${BLUE};
  }
`;
export const ButtonIcon = styled.button`
  background-color: ${BLUE};
  position: absolute;
  z-index: 2;
  width: 55px;
  height: 100%;
  border-radius: inherit;
  right: 0;
  top: 0;
  cursor: pointer;
  transition: all 0.25s ease;
  &:active {
    transform: scale(0.97);
  }
`;
