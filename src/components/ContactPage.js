import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div id="contact-body" className='container'>
        <div className='contact-main'>
            <h4>Contact Us</h4>
            <form action="">
                <div className="input-icons">
                    <i className="fa-solid fa-user contact-icon"></i>
                    <label htmlFor="fname"></label>
                    <input type="text" id='fname' placeholder='Fullname ' />

                    <i className="fa-solid fa-envelope contact-icon"></i>
                    <label htmlFor="email"></label>
                    <input type="email" id='emai' placeholder='Email' />
                </div>

                <label htmlFor="message"></label>
                <textarea name="message" id="message" placeholder='Your Message '></textarea>

                <input type="submit" value="Send Message" />
            </form>
        </div>
    </div>
  )
}

export default ContactPage