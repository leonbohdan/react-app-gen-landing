import { useState, useEffect } from 'react';
import './Products.scss';
import { PointerBox } from '../PointerBox/PointerBox';

export const Products = () => {
  return (
    <div className="products" id="products">
      <section className="hero1">
        <div className="hero1__pointers">
          <PointerBox />
        </div>

        <div className="hero1__content">
          <div className="hero1__left">L</div>
          <div className="hero1__right">R</div>
        </div>
      </section>

      <section className="hero2">
        <div className="hero2__pointers">
          <PointerBox />
        </div>

        <div className="hero2__content">
          <div className="hero2__left">L</div>
          <div className="hero2__right">R</div>
        </div>
      </section>

      <section className="hero3">
        <div className="hero3__pointers">
          <PointerBox />
        </div>

        <div className="hero3__content">
          <div className="hero3__left">
            <div className="block hero3__title">Manage Crypto Wallets</div>
            <div className="block hero3__text">
              Manage your digital or traditional money crypto wallets.
            </div>
            <div className="block hero3__link">
              <a className="hero3__link--link" href="#">View More</a>
            </div>
          </div>
          <div className="hero3__right"></div>
        </div>
      </section>
    </div>
  );
}
