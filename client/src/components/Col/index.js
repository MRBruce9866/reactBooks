import React from 'react'
import './style.css'

function Col (props){
    return (
        <div className={`${props.col || 'col-12'} myCol myCol-${props.type || 'none'}`}>
        {props.children}
        </div>
    )
}

export default Col;