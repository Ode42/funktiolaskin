import React from "react";
import { useState } from "react";

export default function LaskinNappaimisto(props) {
  const [tapahtuma, setTapahtuma] = useState([]);

  const lisaaTapahtumaNappi = (tapahtuma) => {
    props.lisaaTapahtuma(tapahtuma);
  };

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
                setTapahtuma(tapahtuma.concat(number));
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
      <div className="operaatiot">
        {["+", "-", "/", "*"].map((i) => {
          return (
            <button
              key={i}
              className="operaatio"
              onClick={() => {
                const operaatio = i;
                setTapahtuma(tapahtuma.concat(operaatio));
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          lisaaTapahtumaNappi(tapahtuma);
          setTapahtuma([]);
        }}
      >
        laske
      </button>
    </>
  );
}
