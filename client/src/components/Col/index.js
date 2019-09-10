import React from 'react'
import './style.css'

function Col (props){
    return (
        <div className={`${props.col || 'col-12'} myCol-${props.type}`}>
        {props.children}
        </div>
    )
}

export default Col;