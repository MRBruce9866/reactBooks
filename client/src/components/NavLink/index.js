import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function NavLink (props){
    return (
        <li className="nav-item">
            <Link className="nav-link" {...props}>{props.children}</Link>
        </li>
    )
}

export default NavLink;