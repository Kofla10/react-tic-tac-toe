import React from 'react'

const Log = ( { turns }) => {
    console.log( turns );
    return (
        <>
            <ol id='log'>
                {
                    turns.map(item => <il>{ `${item.player} selected ${item} `}</il>)
                }
            </ol>
        </>
    )
}

export default Log
