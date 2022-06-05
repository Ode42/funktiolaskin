import "./styles/App.css";
import "./styles/Laskin.css";
import LausekeRivi from "./components/LausekeRivi";
import LaskinNäppäimisto from "./components/LaskinNäppäimisto";

function App() {
  return (
    <div className="App">
      <h1>Funktiolaskin</h1>
      <LausekeRivi />
      <LaskinNäppäimisto />
    </div>
  );
}

export default App;
