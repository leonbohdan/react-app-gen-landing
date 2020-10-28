import { useState, useEffect } from "react";
import './Header.scss';
import people from '../../images//top-people.png';
import { Nav } from '../Nav/Nav';

export const Header = () => {
  return (
    <div className="header" id="home">
      <Nav />
      <div className="header__people">
        <img
          className="header__img"
          src={people}
          alt="people"
          width={1100}
          height={300}
        />
      </div>

      <section className="header__promo">
        <div className="header__body">
          {/* <div className="hero-body"> */}
          <div className="container">
            <h1 className="header__title">
              Buy and Sell Cryptos easier than ever
            </h1>
            <p className="header__paragraf">
              With our new finance app, you will ever be on track of all
              transactions in a smart and easy way.
            </p>
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}
