import './App.scss';
import 'bulma';
import '@fortawesome/fontawesome-free';
import { getMoney } from "./api/api";

function App() {

  console.log(getMoney());
  return (
    <div className="App">
      <div className="container">
        <h1>App</h1>
      </div>
    </div>
  );
}

export default App;
