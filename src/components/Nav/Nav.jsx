import { useState, useEffect } from 'react';
import './Nav.scss';

export const Nav = () => {
  return (
    <>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item img" href="#home">
          </a>
          <div className="navbar-burger burger" data-target="Transparent">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="Transparent" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="#about">
              About
            </a>
            <a class="navbar-item" href="#products">
              Products
            </a>
            <a class="navbar-item" href="#rate">
              Rate
            </a>
            <a class="navbar-item" href="#support">
              Support
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}