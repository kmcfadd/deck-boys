import React from 'react';
import './Header.css'

function Header() {

    return(
        <div className="Header">
            <h1><a href="/">Deck Boys</a></h1>
            <nav>
                <ul className="navGroup">
                    <li className="navItem"><a href="/decks">Decks</a></li>
                    <li className="navItem"><a href="/register">Register</a></li>
                    <li className="navItem"><a href="/dashboard">Dashboard</a></li> 
                </ul>
               
            </nav>
        </div>
    )
}

export default Header;