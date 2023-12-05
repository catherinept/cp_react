import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../assets/FDTodo.png'; 
import { Link } from 'react-router-dom';

function NavBar() {

    const linkStyle = {
        fontWeight: 'bold',  
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-orange">
            <Link to="/" className="navbar-brand">
                <img src={Logo} alt="Logo de la empresa" width="120" height="100" /> 
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" style={linkStyle} className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" style={linkStyle} className="nav-link">Seguridad Industrial</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" style={linkStyle} className="nav-link">Productos Para Construcción</Link>
                    </li>
                </ul>
            </div>
            <CartWidget itemCount={3} />
        </nav>
    );
}

export default NavBar;
