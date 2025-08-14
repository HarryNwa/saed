import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerContent}>
                    <div className={style.footerSection}>
                        <h3 className={style.footerHeading}>SAED</h3>
                        <p className={style.footerText}>
                            Empowering corps members with valuable skills for personal and professional development during their service year.
                        </p>
                        <div className={style.socialIcons}>
                            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className={style.footerSection}>
                        <h3 className={style.footerHeading}>Quick Links</h3>
                        <ul className={style.footerLinks}>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/programs">Programs</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className={style.footerSection}>
                        <h3 className={style.footerHeading}>Contact Info</h3>
                        <ul className={style.contactInfo}>
                            <li>NYSC Headquarters, Abuja</li>
                            <li>Email: info@saed.com</li>
                            <li>Phone: +234 800 123 4567</li>
                        </ul>
                    </div>

                    <div className={style.footerSection}>
                        <h3 className={style.footerHeading}>Newsletter</h3>
                        <p className={style.footerText}>Subscribe to our newsletter for updates</p>
                        <form className={style.newsletterForm}>
                            <input type="email" placeholder="Your email address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className={style.footerBottom}>
                    <p>&copy; 2025 SAED. All rights reserved.</p>
                    <div className={style.legalLinks}>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;