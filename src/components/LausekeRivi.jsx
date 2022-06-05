import React from "react";
import { laskeTulos } from "./../services/laskeTulos";

const LausekeRivi = (props) => {
  const rivit = props.rivit;
  const tulos = laskeTulos(rivit);
  return (
    <div>
      <div className="lauseke">
        <p>Lauseke: </p>
        <p id="lauseke-rivi">
          {rivit.map((rivi) => (
            <>
              {rivi.luku}
              {rivi.operaatio}
            </>
          ))}
        </p>
      </div>
      <p>Tulos: {tulos}</p>
    </div>
  );
};

export default LausekeRivi;
