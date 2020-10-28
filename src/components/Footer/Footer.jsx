import { useState, useEffect } from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <>
      <footer className="footer" id="support">
        <div className="footer__top">
          <div className="footer__left">
            <div className="top">Contact Us</div>
            <div className="bottom">
              <a className="telegram" href="https://web.telegram.org/"></a>
              <a className="twitter" href="https://twitter.com/"></a>
              <a className="facebook" href="https://www.facebook.com/"></a>
            </div>
          </div>
          <div className="footer__right">
            <div className="top top--link">Get Updates from us</div>
            <div className="bottom">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="footer__input input"
                    type="email"
                    placeholder="Type Email address"
                  />
                </div>
                <div className="control">
                  <button className="button is-info footer__button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="navbar-divider"></hr>

        <div className="footer__bottom">
          <div className="footer__left">
            <a className="footer__link footer__link--left" href="#about">
              About Us
            </a>
            <a className="footer__link" href="#support">
              Contact Us
            </a>
          </div>
          <div className="footer__right">
            <a className="footer__link footer__link--left" href="#about">
              FAQ
            </a>
            <a className="footer__link" href="#home">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}