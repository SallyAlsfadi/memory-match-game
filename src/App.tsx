import React from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <GameStatus />
        <Board />
      </div>
    </>
  );
};

export default App;
