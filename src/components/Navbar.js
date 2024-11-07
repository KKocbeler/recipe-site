import React, { useState } from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    const [showNavbarMobile, setShowNavbarMobile] = useState(true);

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    const handleNavbarHeaderClick = () => {
        setShowNavbarMobile(!showNavbarMobile);
    }

    const handleNavLinkClick = () => {
        setShowNavbarMobile(true);
    }

  return (
    <>
        <div id="main-nav">
            <div className="nav-logo">
                <Link to={'/'} className='logo'>
                    <i className="fa-solid fa-bowl-food"></i> FOODLAND
                </Link>
                <div className={showNavbarMobile ? 'nav-bars-show' : 'nav-bars-hide'} onClick={handleNavbarHeaderClick}>
                    <i className={"fa-solid fa-plate-wheat"}></i>
                </div>
            </div>
            <div className={showNavbarMobile ? 'nav-menu-show' : 'nav-menu-hide'}>
                <ul className="nav-list">
                    <li className='nav-items'>
                        <NavLink className="" to={'/'} onClick={ () => { toggleNav(); handleNavLinkClick(); }} activeClassName="active"> Home </NavLink>
                    </li>
                    <li className='nav-items'>
                        <NavLink className="" to={'/contact'} onClick={ () => { toggleNav(); handleNavLinkClick(); }} activeClassName="active"> Contact </NavLink>
                    </li>
                    <li className='nav-items'>
                        <NavLink className="" to={'/c'} onClick={ () => { toggleNav(); handleNavLinkClick(); }} activeClassName="active"> Error </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar