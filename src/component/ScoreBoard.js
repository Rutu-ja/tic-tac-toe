import React from 'react'
import './ScoreBoard.css'

  const ScoreBoard=({Score, xplaying })=> {
    const{xScore,oScore}=Score;
    return (
        <div className='scoreboard'>
            <span className={`score x-score ${!xplaying && "inactive"}`}>X-Score {xScore}</span>
            <span className={`score o-score ${xplaying && "inactive"}`}>X-Score {oScore}</span>
        </div>
    )
}

export default ScoreBoard