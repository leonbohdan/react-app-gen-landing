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
          <div className="hero1__left">
            <div className="block hero3__title">
              Browse through a range of our crypto Products.
            </div>
            <div className="block hero3__link">
              <a
                className="hero3__link--link"
                target="_blank"
                rel="noreferrer"
                href="https://www.investopedia.com/best-crypto-exchanges-5071855"
              >
                View More&nbsp;
              </a>
            </div>
          </div>
          <div className="hero1__right">
            <div className="hero1__img1"></div>
            <div className="hero1__img2"></div>
          </div>
        </div>
      </section>

      <section className="hero2">
        <div className="hero2__pointers">
          <PointerBox />
        </div>

        <div className="hero2__content">
          <div className="hero2__left"></div>
          <div className="hero2__right">
            <div className="block hero3__title">
              See a graphical representation of your finances via our crypto
              chart
            </div>
            <div className="block hero3__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              auctor imperdiet tincidunt. Nullam nec nulla tortor.
            </div>
            <div className="block hero3__link">
              <a
                className="hero3__link--link"
                target="_blank"
                rel="noreferrer"
                href="https://coinmarketcap.com/"
              >
                View More&nbsp;
              </a>
            </div>
          </div>
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
              <a
                className="hero3__link--link"
                target="_blank"
                rel="noreferrer"
                href="https://www.investopedia.com/best-bitcoin-wallets-5070283"
              >
                View More&nbsp;
              </a>
            </div>
          </div>
          <div className="hero3__right"></div>
        </div>
      </section>
    </div>
  );
}
