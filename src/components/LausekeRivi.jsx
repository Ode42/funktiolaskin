import React from "react";
import { laskeTulos } from "./../services/laskeTulos";

const LausekeRivi = (props) => {
  const tapahtuma = props.tapahtuma;
  const tulos = laskeTulos(tapahtuma);

  if (tapahtuma !== undefined) {
    return (
      <div>
        <div className="lauseke">
          <p>Lauseke: </p>
          <p id="lauseke-rivi">
            {tapahtuma.map((rivi) => {
              return <>{rivi}</>;
            })}
          </p>
        </div>
        <p>Tulos: {tulos}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default LausekeRivi;
