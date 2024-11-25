import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileNavMenu.css';

const MobileNavMenu = () => {
    const location = useLocation()


    return (
        <div className="mobile-nav-menu">
            <ul className="mobile-list">
                <li>
                    <Link to={'/'} className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <i class="fa-solid fa-house"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/recipes/?q=meat'} className={`mobile-link ${location.pathname === '/recipes/' ? 'active' : ''}`}>
                        <i class="fa-solid fa-bowl-food"></i>
                        <span>Recipes</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/article'} className={`mobile-link ${location.pathname === '/article' ? 'active' : ''}`}>
                        <i class="fa-solid fa-book-open"></i>
                        <span>Article</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/contact'} className={`mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <i class="fa-solid fa-phone"></i>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileNavMenu