import React from 'react';
import { Link } from 'react-router-dom';
import './DesktopNavMenu.css';

const DesktopNavMenu = ({setKeyword, handleSubmit, desktopInputRef}) => {

    return (
        <div className="desktop-nav-menu"> 
            <ul className='nav-list'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/recipes'}>Recipes</Link>
                </li>
                <li>
                    <Link to={'/article'}>Article</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" placeholder='Search for a recipe' ref={desktopInputRef} onChange={(e) => setKeyword(e.target.value)}/>
                            <button type='submit'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default DesktopNavMenu