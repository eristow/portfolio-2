import AppContainer from "src/components/AppContainer";
import ContentContainer from "src/components/ContentContainer";
import H1 from "src/components/H1";
import { calculateWinner } from "./helpers";
import { useState } from "react";
import Board from "./Board";
import "./index.css";
import { H3 } from "./H3";
import Button from "src/components/Button";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    // return if won or occupied
    if (winner || squares[i]) return;

    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li className="list-none" key={move}>
          <Button onClick={() => jumpTo(move)}>{destination}</Button>
        </li>
      );
    });

  return (
    <AppContainer>
      <ContentContainer>
        <H1>Tic Tac Toe (using React Hooks)</H1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="flex justify-between">
          <div>
            <H3>History</H3>
            {renderMoves()}
          </div>
          <H3>{winner ? `Winner: ${winner}` : `Next Player: ${xO}`}</H3>
        </div>
      </ContentContainer>
    </AppContainer>
  );
}
