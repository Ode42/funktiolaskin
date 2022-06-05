import React from "react";
import { useState } from "react";

export default function LaskinNäppäimisto() {
  const [luku, setLuku] = useState(0);
  const [numbers, setNumbers] = useState([]);

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
          const newNumber = parseInt(numbers.join(""));
          console.log(newNumber);
          setNumbers([]);
        }}
      >
        Submit
      </button>
    </>
  );
}
