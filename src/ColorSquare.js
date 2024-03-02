import React from "react";
import "./ColorSquare.css";

function ColorSquare({ colorName, hexValue }) {
    return (
        <div id="color-square" style={{ backgroundColor: colorName }}>
            <p> {colorName || "Empty Value"}</p>
            <p> {hexValue || null}</p>
        </div>
    );
}

export default ColorSquare;
