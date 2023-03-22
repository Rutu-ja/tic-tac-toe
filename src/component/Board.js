import React from 'react'
import Box from "./Box"
import "./board.css"

export const Board = ({board ,onClick}) => {
    return (
        <div className='Board'>
            {board.map((value,indx)=>{
                return <Box value={value} onclick={()=> value===null && onClick(indx)}></Box>
            })}
                  
        </div>
    )
}
