import React from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className={'navbar'}>
            <div className='navbar__items'>
                <NavLink to={'/tasks'} className='navbar__item'>Входящие задачи</NavLink>
            </div>

        </div>
    );
};

export default Navbar;