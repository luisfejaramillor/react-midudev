/* eslint-disable react/prop-types */
import { Square } from "./Square";

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return;

  const winnerText = winner ? `Win` : "Tie";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {<Square>{winner ? winner : "-"}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Restart Game</button>
        </footer>
      </div>
    </section>
  );
};
