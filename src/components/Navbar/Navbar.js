import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import DesktopNavMenu from './DesktopNavMenu';
import MobileNavMenu from './MobileNavMenu';

const Navbar = () => {
    const mobileInputRef = useRef(null);
    const desktopInputRef = useRef(null);
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [toggleNav, setToggleNav] = useState(false);

    const handleToggleNav = () => {
        setToggleNav(!toggleNav)
    }

    const clearInput = () => {
        if (mobileInputRef.current) {
            mobileInputRef.current.value = '';
            setKeyword('');
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(keyword.trim() !== '') {
            navigate(`/recipes/?q=${keyword}`)
            if(desktopInputRef.current) {
                desktopInputRef.current.value = '';
            }
            if(mobileInputRef.current) {
                desktopInputRef.current.value = '';
            }
            setToggleNav(!toggleNav)
        } else {
            alert('Please enter a word')
        }
        
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 1) {
                setToggleNav(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => (
            window.removeEventListener('scroll', handleScroll)
        )
    }, [])

    return (
        <div id='navbar'>
            <div className="navbar-header">
                <h1 className="navbar-logo">
                    <Link to={'/'}>FOODLAND</Link>
                </h1>
                <button type='button' className='search-button' onClick={handleToggleNav}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <form onSubmit={handleSubmit} className={`mobile-search ${toggleNav ? 'show' : ''}`}>
                    <div className="mobile-box">
                        <input type="text" placeholder='Search for a recipe' ref={mobileInputRef} onChange={(e) => setKeyword(e.target.value)}/>
                        <button type='submit'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button type='button' className={`clear ${mobileInputRef.current?.value ? 'show' : '' }`} onClick={clearInput}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <button type='button' className="close" onClick={handleToggleNav}>
                    <i className="fa-solid fa-x"></i>
                    </button>
                </form>
            </div>
            <DesktopNavMenu setKeyword={setKeyword} handleSubmit={handleSubmit} desktopInputRef={desktopInputRef}/>
            <MobileNavMenu keyword={keyword}/>
        </div>
    )
}

export default Navbar