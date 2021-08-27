import React from "react";
import {
  CardInfoTitle,
  CardBody,
  TypeBadge,
  CardContainerFull,
  BadgeWrapper,
  InfoContainer,
  Line,
  InfoText,
  SpritesWrapper,
  Sprites,
} from "../../assets/styles/components/card";
import { typesColores } from "../../utils/pokemons";

const InfoCard = ({ pokemon }) => {
  const {
    id,
    name,
    height,
    weight,
    sprites: { front_shiny, back_shiny },
    types,
  } = pokemon;
  return (
    <CardContainerFull>
      <CardBody>
        <CardInfoTitle>{name}</CardInfoTitle>
        <BadgeWrapper marginB="1.8rem">
          {types &&
            types.map(({ type }) => (
              <TypeBadge key={type.name} color={typesColores[type.name]}>
                {type.name}
              </TypeBadge>
            ))}
        </BadgeWrapper>
        <InfoContainer>
          <InfoText>
            <strong>Podedex Number</strong>
          </InfoText>
          <InfoText>{id}</InfoText>
          <Line />
        </InfoContainer>
        <InfoContainer>
          <InfoText>
            <strong>Podedex Number</strong>
          </InfoText>
          <InfoText>{id}</InfoText>
          <Line />
        </InfoContainer>
        <InfoContainer>
          <InfoText>
            <strong>Height</strong>
          </InfoText>
          <InfoText>{height}</InfoText>
          <Line />
        </InfoContainer>
        <InfoContainer>
          <InfoText>
            <strong>Weigth</strong>
          </InfoText>
          <InfoText>{weight}</InfoText>
          <Line />
        </InfoContainer>
        <InfoContainer>
          <InfoText>
            <strong>Shiny</strong>
          </InfoText>
        </InfoContainer>
        <SpritesWrapper>
          <Sprites src={front_shiny} alt={`${name} sprite front`} />
          <Sprites src={back_shiny} alt={`${name} sprite back`} />
        </SpritesWrapper>
      </CardBody>
    </CardContainerFull>
  );
};

export default InfoCard;
