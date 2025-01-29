import React from "react";
import { CardContainer, CardImage, CardBack } from "../styles/CardStyles";

interface CardProps {
  imageName: string;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ imageName, isFlipped, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      {isFlipped ? (
        <CardImage src={require(`../assets/${imageName}`)} alt="Card" />
      ) : (
        <CardBack />
      )}
    </CardContainer>
  );
};

export default Card;
