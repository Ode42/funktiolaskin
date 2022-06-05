import "./styles/App.css";
import "./styles/Laskin.css";
import React from "react";
import LausekeRivi from "./components/LausekeRivi";
import LaskinNappaimisto from "./components/LaskinNappaimisto";
import { useState } from "react";

function App() {
  const [rivit, setRivit] = useState([])

  const lisaaRivi = (uusiRivi) => {
    setRivit(rivit.concat(uusiRivi))
  }
  return (
    <div className="App">
      <h1>Funktiolaskin</h1>
      <LausekeRivi rivit={rivit} />
      <LaskinNappaimisto lisaaRivi={lisaaRivi}/>
    </div>
  );
}

export default App;
