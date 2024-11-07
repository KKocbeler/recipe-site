import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div id='error' className='container'>
            
            <h2>Error!</h2>
            <p>We can't seem to find the recipes you're looking for.</p>
            <div>
                <i className="fa-solid fa-face-frown-open"></i>
            </div>
            <button>
                <Link to={'/'}>
                    <i className="fa-solid fa-house"></i>
                </Link>
            </button>
            
        </div>
    )
}

export default Error