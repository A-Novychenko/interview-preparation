import { useState } from 'react';

const BOARD_ITEMS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    onPlay(nextSquares);
  }

  const rowSquares = (item, idx) => (
    <div className="board-row" key={idx}>
      {item &&
        item.map(value => (
          <Square
            key={value}
            value={squares[value]}
            onSquareClick={() => handleClick(value)}
          />
        ))}
    </div>
  );

  const boardMarkup = (
    <>{BOARD_ITEMS && BOARD_ITEMS.map((el, idx) => rowSquares(el, idx))}</>
  );

  return (
    <>
      <div className="status">{status}</div>
      {boardMarkup}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function ReverseBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Reverse
    </button>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [reversedHistory, setReversedHistory] = useState(false);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleReverse() {
    setReversedHistory(!reversedHistory);
  }

  const moves = history
    .map((squares, move) => {
      let description;
      if (move > 0) {
        description =
          move === currentMove
            ? 'You are at move #' + move
            : 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }

      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    })
    .sort(() => (reversedHistory ? -1 : 1));

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ReverseBtn onClick={handleReverse} />
        <ol reversed={reversedHistory}>{moves}</ol>
      </div>
    </div>
  );
}
