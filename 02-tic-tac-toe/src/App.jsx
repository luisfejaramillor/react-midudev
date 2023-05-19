import confetti from "canvas-confetti";
import { useState } from "react";
import { Square } from "./components/Square.jsx";
import { LOCAL_STORAGE_ITEMS, TURNS } from "./constants.js";
import {
  checkEndGame,
  checkWinner,
  removeItemLocalStorage,
} from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";

export const App = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const boardTurn = window.localStorage.getItem("turn");
    return boardTurn ? JSON.parse(boardTurn) : TURNS.X;
  });
  const [winner, setWinner] = useState(null);
  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", JSON.stringify(newTurn));
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      removeItemLocalStorage(LOCAL_STORAGE_ITEMS);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
      removeItemLocalStorage(LOCAL_STORAGE_ITEMS);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
    removeItemLocalStorage(LOCAL_STORAGE_ITEMS);
  };
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O} </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
};
