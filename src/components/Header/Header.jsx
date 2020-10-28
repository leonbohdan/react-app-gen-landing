import { useState, useEffect } from "react";
import './Header.scss';
import people from '../../images//top-people.png';
import { Nav } from '../Nav/Nav';

export const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="header__people">
        <img className='header__img' src={people} alt="people" width={1100} height={300} />
      </div>
    </div>
  );
}
