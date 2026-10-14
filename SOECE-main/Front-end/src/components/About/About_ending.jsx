import React from 'react';
import "./About_ending.css";

const handleSoon = (e) => {
    e.preventDefault();
    alert("🚀 Coming Soon! Stay tuned.");
};

const About_ending = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <h2 className="footer-title">About Us</h2>

                <p className="footer-desc">
                    Society of Electronics and Communication Engineers <strong>(SoECE)</strong>
                    <br />
                    A society which was established in the department of Electronics and Communication Engineering (ECE) NIT Jalandhar
                </p>

                {/* <div className="footer-socials">
                    <a href="https://instagram.com/soece_nitj" target="_blank" rel="noreferrer" className="social-btn insta">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span>Instagram</span>
                    </a>

                    <a href="#" target="_blank" rel="noreferrer" className="social-btn linked" onClick={handleSoon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                    <a href="#" target="_blank" rel="noreferrer" className="social-btn twitter" onClick={handleSoon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <span>Twitter</span>
                    </a>
                </div> */}

                <div className="footer-contact">
                    <h3>Contact Us</h3>

                    <div className="contact-row">
                        <div className="contact-item">
                            <span className="contact-label">Faculty Coordinator</span>
                            <span className="contact-name">Dr. Manjeet Singh</span>
                            <a href="mailto:singhm@nitj.ac.in">singhm@nitj.ac.in</a>
                        </div>

                        <div className="contact-divider" />

                        <div className="contact-item">
                            <span className="contact-label">Student Coordinator</span>
                            <span className="contact-name">Hardik Agarwal</span>
                            <a href="tel:+918769494606">+91 8769494606</a>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>Copyright © 2026 | All rights reserved, SoECE NIT Jalandhar – 144011</p>
                </div>
            </div>
        </footer>
    );
}

export default About_ending;