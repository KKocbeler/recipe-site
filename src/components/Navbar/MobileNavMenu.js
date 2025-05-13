import { Link, useLocation } from 'react-router-dom';
import './MobileNavMenu.scss';
import { useEffect, useState } from 'react';

const MobileNavMenu = () => {
    const location = useLocation()
    const [showMobileNav, setShowMobileNav] = useState(false)
    const mobileNavLinks = [
        {
            path: '/',
            iconClass: 'fa-solid fa-house',
            label: 'Home',
        },
        {
            path: '/recipes',
            search: '?q=meat',
            iconClass: 'fa-solid fa-bowl-food',
            label: 'Recipes',
        },
        {
            path: '/article',
            iconClass: 'fa-solid fa-book-open',
            label: 'Article',
        },
        {
            path: '/contact',
            iconClass: 'fa-solid fa-phone',
            label: 'Contact',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setShowMobileNav(true)
            } else {
                setShowMobileNav(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => (
            window.removeEventListener("scroll", handleScroll)
        )

    }, [])

    return (
        <div className={`mobile-nav-menu ${showMobileNav ? "show" : ""}`}>
            <ul className="mobile-list">
                {
                    mobileNavLinks.map((navLink, index) => (
                        <li key={index}>
                            <Link to={'/'} className={`mobile-link ${location.pathname === navLink.path ? 'active' : ''}`}>
                                <i className={navLink.iconClass}></i>
                                <span>{navLink.label}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MobileNavMenu