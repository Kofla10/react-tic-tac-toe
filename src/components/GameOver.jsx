import React from 'react'

const GameOver = ({ winner, name }) => {
  return (
    <div id='game-over'>
        <h2>Game Over</h2>
        <p>{ winner } won! { name }</p>
        <p>
            <button> Rematch!</button>
        </p>
    </div>
  )
}

export default GameOver
