import './ContactPage.scss'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-body container">
                <div className="contact-form">
                    <h1 className="title">Contact Form</h1>
                    <form>
                        <div className="input-box">
                            <label htmlFor="fullname">FULL NAME</label>
                            <input type="text" name='fullname' placeholder='Your Full Name' required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="text" name='email' placeholder='Your Email Address' required/>
                        </div>
                        <div className="input-box">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea name="message" placeholder='Your Message' required></textarea>
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="slogan">
                        We’re all ears and a little <span>hungry </span> too!
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <IoLocationSharp />
                            <p className="contact-text">42 Maple Street, Brooksville, NY 10234, USA</p>
                        </div>
                        <div className="contact-item">
                            <MdLocalPhone />
                            <p className="contact-text">+1 555 123 4567</p>
                        </div>
                        <div className="contact-item">
                            <MdEmail />
                            <p className="contact-text">lembaskitchen@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="contact-socials">
                        <Link to={"/contact"}><FaFacebookF /></Link>
                        <Link to={"/contact"}><FaInstagram /></Link>
                        <Link to={"/contact"}><FaSquareXTwitter /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage