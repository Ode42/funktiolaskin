import "./styles/App.css";
import "./styles/Laskin.css";
import React from "react";
import LausekeRivi from "./components/LausekeRivi";
import LaskinNappaimisto from "./components/LaskinNappaimisto";
import { useState } from "react";

function App() {
  const [tapahtuma, setTapahtuma] = useState([]);

  const lisaaTapahtuma = (uusiTapahtuma) => {
    setTapahtuma(uusiTapahtuma);
  };
  return (
    <div className="App">
      <h1>Funktiolaskin</h1>
      <LausekeRivi tapahtuma={tapahtuma} />
      <LaskinNappaimisto lisaaTapahtuma={lisaaTapahtuma} />
    </div>
  );
}

export default App;
