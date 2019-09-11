import React from 'react'
import NavLink from '../NavLink'
import './style.css'

function Navbar (props){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand" >{props.title}</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink to="/">Search</NavLink>
                    <NavLink to="/saved">Saved</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;