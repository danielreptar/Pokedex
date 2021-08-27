import styled from "styled-components";
import { BLUE, WHITE } from "../variables";
import { deviceMF } from "../breakPoints";

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1.6rem 1rem;
  background-color: ${BLUE};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 3;
  transform: ${(props) =>
    props.isShow ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.25s ease;
  @media ${deviceMF.tablet} {
    width: 320px;
    transform: translateX(0);
  }
`;
export const Logo = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 3.2rem;
`;
export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 2rem;
`;
export const Username = styled.h2`
  color: ${WHITE};
  margin-bottom: 0.5rem;
`;
export const UserLevel = styled.h3`
  color: ${WHITE};
  opacity: 50%;
  margin-bottom: 4rem;
`;
export const UserDescription = styled.span`
  color: ${WHITE};
`;
export const ActionsContainer = styled.div`
  width: 100%;
  margin-top: auto;
`;
export const TextButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Icon = styled.img``;
export const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  @media ${deviceMF.tablet} {
    display: none;
  }
`;
