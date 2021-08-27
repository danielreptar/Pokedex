import styled from "styled-components";
import { deviceMF } from "../breakPoints";

export const SectionContainer = styled.section`
  padding: 0;
  @media ${deviceMF.mobileL} {
    padding: 1.2rem;
  }
  @media ${deviceMF.tablet} {
    padding: 2rem;
  }
`;
