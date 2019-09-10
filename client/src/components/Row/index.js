import React from 'react'
import './style.css'

function Row (props){
    return (
        <div className={`${props.row || 'row'} myRow-${props.type || 'default'}`}>
            {props.children}
        </div>
    )
}

export default Row;