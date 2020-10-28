import { useState, useEffect } from 'react';
import './PointerBox.scss';

export const PointerBox = () => {
  const [pointers, setPointers] = useState([...Array(500)]);

  return (
    <div className="pointers">
      {pointers.map((el, i) => (
        <div className="point" key={new Date() + i}>{el}</div>
      ))}
    </div>
  );
}
