import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbarwrapper">
            <div className="navbarlogo"><Link to="/">WL - projekt</Link></div>

            <div clasname="navbarlist">
                <ul>
                    <li><Link to="/">Vse naloge</Link></li>
                    <li><Link to="/dodaj">Dodaj nalogo</Link></li>
                    {/*<li><Link to="/oprojektu">O projektu</Link></li>*/}
                </ul>
                    
            </div>
        </div>
    )
}
