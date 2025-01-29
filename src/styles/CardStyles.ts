import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.4s ease-in-out;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  background: #ffcc80;
  border-radius: 12px;
  position: absolute;
  backface-visibility: hidden;
`;
