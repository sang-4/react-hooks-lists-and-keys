import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "darkgoldenrod",
    "darkkhaki",
    "darkcyan",
    "darkorchid",
  ];

  const colorElements = colors.map((color) => {
    return <li style={{color: color}}>{color}</li>
  });
  return(
    <div>
      <h1>Top CSS colors</h1>
      <ul>
        {colorElements}
      </ul>
    </div>
  )
}

export default ColorList;
