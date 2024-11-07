import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-main container">
                <div className="footer-sections">
                    <div>
                        <h3> <Link> PARTNERSHİP </Link> </h3>
                        <ul className='footer-ul'>
                            <li>
                                <Link> Websites </Link>
                            </li>
                            <li>
                                <Link> Social Media </Link>
                            </li>
                            <li>
                                <Link> Branding </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <h3> <Link> ABOUT </Link> </h3> 
                         <ul className='footer-ul'>
                            <li>
                                <Link> Our Projects </Link>
                            </li>
                            <li>
                                <Link> Careers </Link>
                            </li>
                         </ul>
                     </div>
                     <div>
                         <h3> <Link> SUPPORT </Link> </h3>
                         <ul  className='footer-ul'>
                            <li>
                                <Link> Support Request </Link>
                            </li>
                            <li>
                                <Link> Contact </Link>
                            </li>
                         </ul>
                     </div>
                </div>
                <div className='social-links'>
                    <Link><i className="fa-brands fa-twitter tw"></i></Link>
                    <Link><i className="fa-brands fa-instagram ins"></i></Link>
                    <Link><i className="fa-brands fa-facebook face"></i></Link>
                    <Link><i className="fa-brands fa-youtube yt"></i></Link>
                </div>
            </div>
            <div className="footer-bottom container">
                Copyright © 2023 - Kocbeler
                <ul className="footer-menu">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/article'}>Article</Link></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer