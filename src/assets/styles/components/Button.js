import styled from "styled-components";
import { WHITE, SOFT_BLUE } from "../variables";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  color: ${WHITE};
  background-color: ${SOFT_BLUE};
  font-weight: bold;
  font-size: 16px;
  transition: all 0.25s ease;
  &:active {
    transform: scale(0.97);
  }
`;
