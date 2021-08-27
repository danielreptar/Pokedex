import React from "react";
import { useHistory } from "react-router-dom";
import {
  CardContainer,
  CardTitle,
  CardBody,
  CardImage,
  CardSubtitle,
  TypeBadge,
  BadgeWrapper,
} from "../../assets/styles/components/card";
import { pad } from "../../utils/helpers";
import { typesColores } from "../../utils/pokemons";

const PokemonCard = ({ pokemon }) => {
  const {
    id,
    name,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
    types,
  } = pokemon;
  const history = useHistory();

  const handleChangePage = (id) => {
    const path = `/pokemon/${id}`;
    history.push(path);
  };
  return (
    <CardContainer onClick={() => handleChangePage(id)}>
      <CardBody center>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{pad(id, 3)}</CardSubtitle>
        <CardImage src={front_default} alt={name} />
        <BadgeWrapper center>
          {types &&
            types.map(({ type }) => (
              <TypeBadge key={type.name} color={typesColores[type.name]}>
                {type.name}
              </TypeBadge>
            ))}
        </BadgeWrapper>
      </CardBody>
    </CardContainer>
  );
};

export default PokemonCard;
