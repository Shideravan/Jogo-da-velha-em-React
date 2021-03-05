import React, { Component } from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  pegarLinha(i) {
    if (i === (0 || 3 || 6)) {
      return 1;
    } else if (i == (1 || 4 || 7)) {
      return 2;
    } else {
      return 3;
    }
  }

  pegarColuna(i) {
    if (i === (0 || 1 || 2)) {
      return 1;
    } else if (i == (3 || 4 || 5)) {
      return 2;
    } else {
      return 3;
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // aqui que será mostrada a coluna e linha
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      linNumber: this.pegarLinha,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      let desc = move
        ? 'Movimento nº ' +
          move +
          '. Jogador: ' +
          '. Posição (' +
          this.xIsNext +
          ', ' +
          this.xIsNext +
          ')'
        : 'Início';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Ganhador: ' + winner;
    } else {
      status = 'Próximo jogador: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={
              ((i) => this.handleClick(i),
              this.pegarLinha(i),
              this.pegarColuna(i))
            }
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
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

export default Game;
