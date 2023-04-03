import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function PNF() {
    return (
        <div>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <NavLink to="/" >Homepage</NavLink>
                </div>
            </div>
        </div>
    );
}

export default PNF;