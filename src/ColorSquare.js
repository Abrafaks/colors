import React from "react";
import "./ColorSquare.css";

function ColorSquare({ colorName }) {
    return (
        <div id="color-square" style={{ backgroundColor: colorName }}>
            {colorName || "Empty Value"}
        </div>
    );
}

export default ColorSquare;
