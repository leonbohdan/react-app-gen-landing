import { useState, useEffect } from 'react';
import './App.scss';
import 'bulma';
import '@fortawesome/fontawesome-free';
import { Rate } from './components/Rate/Rate';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className="App">
      
      <div className="container">
        <Header />
        <Rate />
      </div>
    </div>
  );
}

export default App;
