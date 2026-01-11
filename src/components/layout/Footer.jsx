import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">
          <div>REACH OUT FOR</div>
          <div>INQUIRIES</div>
        </div>
        <div className="footer-contacts">
          <div className="footer-contact">
            <div className="footer-contact-label">EMAIL</div>
            <div className="footer-contact-value"><img className="footer-logo" src="/images/gmail_logo.png" alt="Mail"></img>goli ki Gmale</div>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-label">SOCIAL</div>
            <div className="footer-contact-value">
              <a href="https://www.instagram.com/golilutera/" target="_blank" rel="noopener noreferrer"><img className="footer-logo" src="/images/insta_logo.png" alt="Instagram"></img>Instagram</a>
            </div>
            <div className="footer-contact-value">
              <a href="https://discord.gg/sPjfAruJWp" target="_blank" rel="noopener noreferrer"><img className="footer-logo" src="/images/discord_logo.png" alt="Discord"></img>Join Our Discord</a>
            </div>
          </div>
        </div>
        <div className="footer-title footer-partnerships">
          AND PARTNERSHIPS
        </div>
        <div>&copy; {new Date().getFullYear()} Goli Lutera. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;