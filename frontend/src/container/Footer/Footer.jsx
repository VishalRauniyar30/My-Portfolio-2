import React from 'react';
import './FooterStyles.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_bg">
                <div className="footer_container container grid">
                    <div>
                        <h1 className="footer_title">Vishal</h1>
                        <span className="footer_subtitle">Frontend Developer</span>
                    </div>
                    <ul className="footer_links">
                        <li><a href="#about" className='footer_link'>About</a></li>
                        <li><a href="#work" className='footer_link'>Work</a></li>
                        <li><a href="#skills" className='footer_link'>Skills</a></li>
                        <li><a href="#contact" className='footer_link'>ContactMe</a></li>
                    </ul>
                    <div className="footer_socials">
                        <a href="https://www.facebook.com" className="footer_social" target="_blank" rel="noopener noreferrer">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" className="footer_social" target="_blank" rel="noopener noreferrer">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://twitter.com" className="footer_social" target="_blank" rel="noopener noreferrer">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                </div>
                <p className="footer_copy">
                    &#169; Z.company. All Rights Reserved
                </p>
            </div>

            <a href="#home" className="scrollup" id='scroll-up'>
                <i className="uil uil-arrow-up scrollup-icon"></i>
            </a>
        </footer>
    );
};

export default Footer;
