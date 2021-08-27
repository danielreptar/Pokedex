import React from "react";
import {
  CardBody,
  SpritesWrapper,
  Sprites,
  CardContainerSprites,
  CardImageSprites,
} from "../../assets/styles/components/card";

const PokemonSpriteCard = ({ pokemon }) => {
  const {
    name,
    sprites: {
      front_default: spriteFront,
      back_default: spriteBack,
      other: {
        "official-artwork": { front_default },
      },
    },
  } = pokemon;

  return (
    <div>
      <CardContainerSprites>
        <CardBody center>
          <CardImageSprites src={front_default} alt={name} />
          <SpritesWrapper>
            <Sprites src={spriteFront} alt={`${name} sprite front`} />
            <Sprites src={spriteBack} alt={`${name} sprite back`} />
          </SpritesWrapper>
        </CardBody>
      </CardContainerSprites>
    </div>
  );
};

export default PokemonSpriteCard;
