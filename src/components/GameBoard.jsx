import React, { useState } from 'react'

const GameBoard = ({ onSelectSqueare, board }) => {

    return (
        <ol id="game-board">
            {
                board.map(( row, rowIndex )=>
                    <li key={ rowIndex }>
                        <ol>
                            {
                                row.map(( playerSymbol, colIndex ) =>
                                    <li key={ colIndex }>
                                        <button onClick={ () => onSelectSqueare( rowIndex, colIndex) } disabled = { playerSymbol !== null }> { playerSymbol }</button>
                                    </li>
                                )
                            }
                        </ol>
                    </li>
                )
            }
        </ol>
    )
}

export default GameBoard
