import { useState, useEffect } from 'react';
import './Nav.scss';

export const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item img" href="#home" />
          <div
            data-target="Transparent"
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            href="#"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          id="Transparent"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a className="navbar-item" href="#about">
              About
            </a>
            <a className="navbar-item" href="#products">
              Products
            </a>
            <a className="navbar-item" href="#rate">
              Rate
            </a>
            <a className="navbar-item" href="#support">
              Support
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}