import React from "react";
import "./ColorSquare.css";

function ColorSquare({ colorName, hexValue, isDarkText }) {
    return (
        <div
            id="color-square"
            style={{
                backgroundColor: colorName,
                color: isDarkText ? "#000" : "#fff",
            }}
        >
            <p> {colorName || "Empty Value"}</p>
            <p> {hexValue || null}</p>
        </div>
    );
}

export default ColorSquare;
