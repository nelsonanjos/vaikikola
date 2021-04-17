import React from 'react';
import { Link } from 'react-router-dom';

import "../Assets/Style/style.css";


export default function Header() {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/home">( : | Vai Ki Kola | : )</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto header">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/pessoas">Pessoas</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/produtos">Produtos</Link>
                </li>
                <li className="nav-item active btn-danger logout">
                    <Link className="nav-link" to="/">Logout</Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    );
}