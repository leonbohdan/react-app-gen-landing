import './App.scss';
import 'bulma';
import { Rate } from './components/Rate/Rate';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Products } from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <Products />
        <Rate />
        <Footer />
      </div>
    </div>
  );
}

export default App;
