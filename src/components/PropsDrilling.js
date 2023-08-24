import React from "react";

const PropsDrilling = ({ name, birthYear }) => {
  // We receive props as an object, so can we destructure it and use individual properties. //
  return (
    <div>
      {name},{birthYear}
    </div>
  );
};

export default PropsDrilling;
