import React from 'react'
import './style.css'

function Form (props){
    return (
        <form>
        <div className="form-group">
          {props.children}
        </div>
      </form>
    )
}

export default Form;