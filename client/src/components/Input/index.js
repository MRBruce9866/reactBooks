import React from 'react'
import './style.css'

function Input (props){
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} className="form-control" id={props.id} onChange={props.onChange} value={props.children}/>
        </>
    )
}

export default Input;