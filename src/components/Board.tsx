import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";

// List of images (paired)
const images = [
  "fruit.png",
  "ghost.png",
  "girl.png",
  "kiwi.png",
  "pikachu.png",
  "woman.png",
  "fruit.png",
  "ghost.png",
  "girl.png",
  "kiwi.png",
  "pikachu.png",
  "woman.png",
];

const Board: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <BoardContainer>
      {images.map((image, index) => (
        <Card
          key={index}
          imageName={image}
          isFlipped={flippedCards.includes(index)}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </BoardContainer>
  );
};

export default Board;

// Styled Components
const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 90px);
  grid-gap: 12px;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  padding: 20px;
  background: rgba(255, 165, 0, 0.9);
  border-radius: 16px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
`;
