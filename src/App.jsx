import { useState, useEffect } from 'react';
import './App.scss';
import 'bulma';
import '@fortawesome/fontawesome-free';
import { Rate } from './components/Rate/Rate';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <Rate />
        <Footer />
      </div>
    </div>
  );
}

export default App;
