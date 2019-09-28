import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
        return (
            <nav className="navbar bg-primary">
                <h1 onClick={props.goHome} id="logo">
                    <Link to='/'>{props.title}</Link>
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        );
};

export default Navbar
