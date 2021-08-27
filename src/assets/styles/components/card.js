import styled from "styled-components";
import { deviceMF } from "../breakPoints";
import { BLUE, GREY, ROUND, SHADOW, WHITE } from "../variables";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: ${ROUND};
  width: 150px;
  box-shadow: 0 3px 6px 0 ${SHADOW};
  margin: 0.8rem;
  height: auto;
  display: inline-block;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  transition: all 0.25s ease;
  &:active {
    transform: scale(0.97);
  }
  @media ${deviceMF.mobileL} {
    width: 220px;
    margin: 1rem;
  }
  @media ${deviceMF.tablet} {
    width: 300px;
    margin: 1.2rem;
  }
`;
export const CardContainerSprites = styled(CardContainer)`
  width: auto;
  display: block;
  @media ${deviceMF.mobileL} {
    width: 220px;
    margin: 1rem;
  }
  @media ${deviceMF.tablet} {
    width: 300px;
    margin: 1.2rem;
  }
`;
export const CardContainerFull = styled(CardContainer)`
  width: auto;
  @media ${deviceMF.mobileL} {
    width: 100%;
  } ;
`;
export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 0rem;
  margin-bottom: 0.4rem;
  line-height: 1.5rem;
  font-size: 1.1rem;
  text-align: center;
  &::first-letter {
    text-transform: capitalize;
  }
  @media ${deviceMF.mobileL} {
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
  }
`;
export const CardSubtitle = styled.h4`
  margin: 0;
  margin-bottom: 1.2rem;
  line-height: 1.2rem;
  font-size: 1.2rem;
  font-weight: normal;
  text-align: center;
`;
export const CardBody = styled.div`
  display: flex;
  align-items: ${(props) => (props.center ? "center" : "start")};
  flex-direction: column;
  height: 100%;
  padding: 0.8rem;
  @media ${deviceMF.mobileL} {
    padding: 1.4rem;
  }
  @media ${deviceMF.tablet} {
    padding: 2.4rem;
  }
`;

export const CardImage = styled.img`
  height: auto;
  width: 100px;
  margin-bottom: 1rem;
  @media ${deviceMF.mobileL} {
    width: 150px;
    margin-bottom: 1.2rem;
  }
  @media ${deviceMF.tablet} {
    width: 200px;
    margin-bottom: 1.8rem;
  }
`;
export const CardImageSprites = styled.img`
  height: auto;
  width: 200px;
  margin-bottom: 1rem;
  @media ${deviceMF.mobileL} {
    margin-bottom: 1.2rem;
  }
  @media ${deviceMF.tablet} {
    margin-bottom: 1.8rem;
  }
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem;
`;
export const BadgeWrapper = styled.div`
  width: 100%;
  padding: 0.3rem;
  display: flex;
  margin-bottom: ${(props) => (props.marginB ? props.marginB : "0")};
  justify-content: center;
  @media ${deviceMF.mobileL} {
    justify-content: ${(props) => (props.center ? "center" : "start")};
  }
`;
export const TypeBadge = styled.span`
  min-width: 50px;
  font-size: 0.6rem;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => props.color || BLUE};
  color: ${WHITE};
  padding: 0.3rem;
  margin: 0 0.2rem;
  border-radius: 500px;
  &::first-letter {
    text-transform: capitalize;
  }
  @media ${deviceMF.mobileL} {
    min-width: 70px;
    font-size: 0.8rem;
    margin: 0 0.3rem;
  }
`;
export const SpritesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.3rem;
`;
export const Sprites = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 0.6rem;
`;
export const CardInfoTitle = styled(CardTitle)`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  margin: 1.6rem 0 1.2rem;
  @media ${deviceMF.mobileL} {
    margin: 0 0 1.2rem;
    font-size: 2.4rem;
    line-height: 2.2rem;
    text-align: start;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const InfoText = styled.p`
  font-weight: 16px;
  margin-bottom: 0.3rem;
  @media ${deviceMF.mobileL} {
    font-weight: 18px;
    margin-bottom: 0.4rem;
  }
`;
export const Line = styled.hr`
  width: 100%;
  background-color: ${GREY};
  opacity: 0.3;
  margin: 0.3rem 0 0.6rem;
  @media ${deviceMF.mobileL} {
    margin: 0.5rem 0 0.8rem;
  }
`;
