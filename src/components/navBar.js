import React from 'react';

const Navbar = () => {

    return (
        <div className='navbar'>
            <h1>Todos</h1>
            <ul>
                <li>
                    <a href='/'>Homepage </a>
                </li>
                <li>
                    <a href='/todoForm/new'>Create </a>
                </li>
            </ul>
            <br>
            </br>
        </div>
    );
};

export default Navbar;