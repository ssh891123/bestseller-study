import React from 'react';
import {Link} from 'react-router-dom';
import "./Navigation.css"

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    )
}

export default Navigation;