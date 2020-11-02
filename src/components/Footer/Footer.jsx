import { useState } from 'react';
import './Footer.scss';
import Cookies from 'js-cookie';

export const Footer = () => {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isDanger, setIsDanger] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(query)) {
      setEmail(query);
      setQuery("");
      setIsDanger(false);
      Cookies.set('email', query, { expires: 30 });
    } else {
      setIsDanger(true);
    }
  };

  const validateEmail = (email) => {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);

    return result;
  }

  return (
    <>
      <footer className="footer" id="support">
        <div className="footer__top">
          <div className="footer__left">
            <div className="top">Contact Us</div>
            <div className="bottom">
              <a className="telegram" href="https://web.telegram.org/"> </a>
              <a className="twitter" href="https://twitter.com/"> </a>
              <a className="facebook" href="https://www.facebook.com/"> </a>
            </div>
          </div>
          <div className="footer__right">
            <div className="top top--link">Get Updates from us</div>
            <div className="bottom">
              <form
                className="field has-addons"
                onSubmit={handleSubmit}
              >
                <div className="control">
                  <input
                    className={`footer__input input ${isDanger ? 'is-danger' : ''}`}
                    type="email"
                    placeholder="Type Email address"
                    required
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                    }}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info footer__button"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <hr className="navbar-divider"></hr>

        <div className="footer__bottom">
          <div className="footer__left footer__left--bottom">
            <a className="footer__link footer__link--small footer__link--left" href="#about">
              About Us
            </a>
            <a className="footer__link footer__link--small" href="#support">
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
