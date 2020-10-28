import { useState, useEffect } from 'react';
import './PointerBox.scss';

export const PointerBox = () => {
  const [pointers, setPointers] = useState([...Array(500)]);

  console.log(pointers);

  return (
    <div className="pointers">
      {pointers.map((el) => (
        <div className="point">{el}</div>
      ))}
    </div>
  );
}