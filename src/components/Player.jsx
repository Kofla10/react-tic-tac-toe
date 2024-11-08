import { useState } from "react"

const Player = ( {initialName, symbol, isActive} ) => {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    // console.log(playerName);

    const handleEditName = () => {
        setIsEditing((isEditing ) => !isEditing); // if your new state depends on your previous state value, you should not update the state like this
    }

    const handleChange =(event)  => {
        setPlayerName( event.target.value ); //We change player's name
    }

    // let playerName = <span className="player-name"> { name }</span>;
    // if(isEditing)
    //     playerName = <input placeholder='Player Name' type="text"  required />

    return (
        <li className={ isActive ? 'active' : undefined}>
            <span className="player">
            { !isEditing
                ? <span className="player-name"> { playerName }</span>
                : <input type="text"
                         value={playerName}
                         onChange={handleChange}
                        required />
            }
            <span className="payer-symbol">{ symbol }</span>
            </span>
            <button onClick={handleEditName}>{!isEditing ? 'Edit':'Save'}</button>
        </li>
    )
}

export default Player
