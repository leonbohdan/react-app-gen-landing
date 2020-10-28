import { useState, useEffect } from 'react';
import './Rate.scss';
import { URL_API } from '../../api/api';

export const Rate = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    async function getCrypto() {
      const response = await fetch(URL_API);
      const result = await response.json();
      setCrypto(result.data);

      return result.data;
    }
    getCrypto();
  }, []);

  return (
    <div className="table-container" id="rate">
      <table className="table is-narrow is-hoverable">
        <thead>
          <tr>
            <th>
              <abbr>№</abbr>
            </th>
            <th>
              <abbr>#</abbr>
            </th>
            <th>
              <abbr>Symbol</abbr>
            </th>
            <th>
              <abbr>Name</abbr>
            </th>
            <th>
              <abbr>Price</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          {crypto.map((el, i) => (
            <tr key={el.id}>
              <th>{i + 1}</th>
              <td>{el.id}</td>
              <td>{el.symbol}</td>
              <td>{el.name}</td>
              <td>{el.priceUsd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
