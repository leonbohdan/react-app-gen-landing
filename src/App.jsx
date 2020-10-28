import { useState, useEffect } from 'react';
import './App.scss';
import 'bulma';
import '@fortawesome/fontawesome-free';
import { Rate } from './components/Rate/Rate';

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>App</h1>
        <Rate />
      </div>
    </div>
  );
}

export default App;
