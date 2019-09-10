import React from 'react'
import './style.css'

function Button (props){
    return (
        <button data-index={props.index} className={`btn btn-${props.color} my-2 mx-1`} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;