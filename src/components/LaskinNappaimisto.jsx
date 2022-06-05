import React from "react";
import { useState } from "react";

export default function LaskinNappaimisto(props) {
  const [numbers, setNumbers] = useState([]);

  const lisaaRiviNappi = (rivi) => {
    props.lisaaRivi(rivi);
  }

  return (
    <>
    <div className="lukutaulu">
      {[...Array(10)].map((_, i) => {
        return (
          <button
            key={i}
            className="luku"
            onClick={() => {
              const number = i;
              setNumbers(numbers.concat(number));
            }}
          >
            {i}
          </button>
        );
      })}
      
    </div>
    <button
        onClick={() => {
          const uusiLuku = parseInt(numbers.join(""));
          lisaaRiviNappi(uusiLuku)
          setNumbers([]);
        }}
      >
        Submit
      </button>
    </>
  );
}
