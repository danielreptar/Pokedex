import styled from "styled-components";
import { deviceMF } from "../breakPoints";

export const SectionContainer = styled.section`
  padding: 0rem;
  display: flex;
  flex-direction: column;
  @media ${deviceMF.mobileL} {
    padding: 1.2rem;
    flex-direction: row;
  }
  @media ${deviceMF.tablet} {
    padding: 2rem;
  }
`;
