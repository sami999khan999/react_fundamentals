import React from "react";

export default function ConditionalRendering() {
  const isDeveloper = 0;

  return (
    <div>
      {/* {isDeveloper ? (
        <h1>He is a data sinetist.</h1>
      ) : (
        <h1>He is a wed developer.</h1>
      )} */}

      {/* <h1>{isDeveloper ? "He is a data sinetist" : "He is a wed developer"}</h1> */}

      <h1>He is {isDeveloper ? "" : "not"} a web developer </h1>
    </div>
  );
}
