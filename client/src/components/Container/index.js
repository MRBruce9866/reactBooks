import React from 'react'
import './style.css'

function Container (props){
    return (
        <div className={`${props.container || 'container-fluid'} myContainer-${props.type}`}>
            {props.children}
        </div>
    )
}

export default Container;