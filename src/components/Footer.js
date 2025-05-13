import { FaSquareXTwitter } from 'react-icons/fa6'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-main">
                <div className="footer-sections">
                    <div>
                        <h3> PARTNERSHİP </h3>
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
                         <h3>ABOUT</h3> 
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
                         <h3>SUPPORT</h3>
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
                    <Link><FaSquareXTwitter /></Link>
                    <Link><FaInstagram /></Link>
                    <Link><FaFacebook /></Link>
                    <Link><FaYoutube /></Link>
                </div>
            </div>
            <div className="footer-bottom container-inner">
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