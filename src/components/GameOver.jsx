import React from 'react'

const GameOver = ({ winner, name }) => {
  return (
    <div id='game-over'>
        <h2>Game Over</h2>
        <p>{ winner } win! { name }</p>
        <p>
            <button> Rematch!</button>
        </p>
    </div>
  )
}

export default GameOver
