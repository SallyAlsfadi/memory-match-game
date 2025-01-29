import React, { useState } from "react";
import styled from "styled-components";

const GameStatus: React.FC = () => {
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <StatusContainer>
      <StartButton onClick={() => setMoves(0)}>Start</StartButton>
      <p>Moves: {moves}</p>
      <p>Time: {time} sec</p>
    </StatusContainer>
  );
};

export default GameStatus;

// Styled Components
const StatusContainer = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #555;
  }
`;
