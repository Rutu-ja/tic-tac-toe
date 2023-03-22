import React from 'react'
import './reset.css' 

function Reset({resetBoard}) {
    return (
        <button className='ResetButton' onClick={resetBoard}>Reset</button>
    )
}

export default Reset
