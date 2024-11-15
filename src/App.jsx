
import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-conbinations"
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const deriveActivePlayer = ( gameTurns ) => {
  let currentPlayer = '👺';

  if(gameTurns.length > 0 && gameTurns[0].player === '👺')
    currentPlayer = '💀'

  return currentPlayer;
}

function App() {

  const [hasWinner, setHasWinner] = useState(false);
  const [gameTurns, setGameTurns] = useState([]);
  const [winnerName, setWinnerName] = useState('')

  const activePlayer =  deriveActivePlayer( gameTurns );

  let gameBoard =  initialGameBoard;

  for ( const turn of gameTurns){

      const { square, player } = turn;
      const { row, col }       = square;

      gameBoard[row][col] = player;

  }

  let winner = null;
  for ( const combination of WINNING_COMBINATIONS ){

    const firsSquareSymbol   = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol  = gameBoard[combination[2].row][combination[2].column];

    if(firsSquareSymbol && firsSquareSymbol === secondSquareSymbol && thirdSquareSymbol){
      winner = firsSquareSymbol;
    }

  }

  const handleSelectSquare = (rowIndex, colIndex) => {

    setGameTurns( prevTurns => {
      const updatedTurns = [
        {square: { row: rowIndex, col: colIndex }, player: activePlayer},
        ... prevTurns]

        return updatedTurns;
    });

  }

  return(
    <main>
      <img src="./" alt="" />
      <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player nameWinner = { setWinnerName } initialName='Player 1' symbol='👺' isActive={ activePlayer === '👺' }/>
            <Player nameWinner = { setWinnerName } initialName='Player 2' symbol='💀' isActive={ activePlayer === '💀'}/>
          </ol>
          {winner && <GameOver winner={ winner } name = { 'Camilo' }/>}
          <GameBoard
            onSelectSqueare = { handleSelectSquare }
            board = { gameBoard }
          />
      </div>
      <Log turns = { gameTurns }/>
    </main>
  )
}

export default App