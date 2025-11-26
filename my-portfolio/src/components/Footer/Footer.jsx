import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'




const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
           <h1 className='name'>Michael Ager Midenga</h1>

        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe-btn">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
           <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2025 Michael Ager Midenga. All rights reserved
            </p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
           </div>
    </div>
  )
}

export default Footer
