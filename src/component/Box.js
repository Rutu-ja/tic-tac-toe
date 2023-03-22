import React from 'react'
import "./box.css"
function box({value,onclick}) {
    const style=value==="X"?"Box x":"Box o"
    return (
        <button className={style} onClick={onclick}>{value}</button>
    )
}

export default box
