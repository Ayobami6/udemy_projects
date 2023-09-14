import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";

const PLAYER_0 = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard: React.FC = () => {
  const [gameboard, setGameboard] = useState(Array(16).fill(PLAYER_0));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const circleClicked = (id) => {
    console.log("Circle Clicked: " + id);
    // make a copy of the gameboard
    // const board = [...gameboard];
    // board[id] = currentPlayer;
    // setGameboard(board);
    setGameboard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    console.log(gameboard);
    console.log(currentPlayer);
  };

  const renderCircle = (id) => {
    return (
      <div key={id}>
        <GameCircle
          id={id}
          className={`player_${gameboard[id]}`}
          circleClick={circleClicked}
        ></GameCircle>
      </div>
    );
  };

  const circleCount = 16;
  const circles = [];

  for (let id = 0; id <= circleCount; id++) {
    circles.push(renderCircle(id));
  }
  return (
    <>
      <div className='gameboard'>{circles}</div>
    </>
  );
};

export default GameBoard;
