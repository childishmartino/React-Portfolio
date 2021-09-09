import React from 'react'
import avatar from '../assets/img/avatar.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 Chris G.
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default Navbar;