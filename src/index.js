//José Marcio Rezende Franco
//Thais de Luca Vahia de Abreu

// MELHORIAS FUTURAS
// 0. Modularizar em arquivos diferentes.
// 1. Mostrar a localização de cada jogada no formato (col,row), para cada jogada no histórico.
// 2. Estilizar com negrito o item da lista de jogadas que está selecionado no momento.
// 3. Reescrever o componente Board para utilizar 2 loops para fazer os quadrados, em vez de deixá-los hardcoded.
// 4. Adicionar um botão de toggle que lhe permita ordenar os jogadas em ordem ascendente ou descendente.
// 5. Quando alguém ganhar, destaque os 3 quadrados que causaram a vitória.
// 6. Quando ninguém ganhar, exiba uma mensagem informando que o resultado foi um empate.

//LINHAS:
//012 - primeira, 345 - segunda, 678 - terceira

//COLUNA:
//036 - Primeira, 147 - Segunda, 258 - Terceira

// Squares  (Linha, Coluna):
// 0 -> (1, 1)
// 1 -> (1, 2)
// 2 -> (1, 3)

// 3 -> (2, 1)
// 4 -> (2, 2)
// 5 -> (2, 3)

// 6 -> (3, 1)
// 7- > (3, 2)
// 8 -> (3, 3)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board.js';
import Game from './components/Game.js';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
