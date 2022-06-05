import React from "react";

const LausekeRivi = (props) => {
  const rivit = props.rivit;
  return (
    <div>
      <p>Lauseke: </p>
      <p id="lauseke-rivi">
        {
          rivit.map(rivi => (
            <>
            {rivi}-
            </>
          ))
        }
      </p>
    </div>
  );
};

export default LausekeRivi;
