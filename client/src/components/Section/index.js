import React from 'react'
import './style.css'

function Section (props){
    return (
        <section className={props.type}>
            {props.children}
        </section>
    )
}

export default Section;