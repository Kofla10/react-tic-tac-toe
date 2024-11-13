
import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function App() {

  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('👺')

  const handleSelectSquare = (rowIndex, colIndex) => {

    setActivePlayer( ( currentActivePlayer )  => currentActivePlayer === '👺' ? '💀':'👺');

    setGameTurns( prevTurns => {

      let currentPlayer = '👺';

      if(prevTurns.length > 0 && prevTurns[0].player === '👺')
        currentPlayer = '💀'

      const updatedTurns = [
        {square: { row: rowIndex, col: colIndex }, player: currentPlayer},
        ... prevTurns]

        return updatedTurns;
    });

  }

  return(
    <main>
      <img src="./" alt="" />
      <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName='Player 1' symbol='👺' isActive={ activePlayer === '👺' }/>
            <Player initialName='Player 2' symbol='💀' isActive={ activePlayer === '💀'}/>
          </ol>
          <GameBoard
            onSelectSqueare = { handleSelectSquare }
            turns = { gameTurns }
          />
      </div>
      <Log turns = { gameTurns }/>
    </main>
  )
}

export default App