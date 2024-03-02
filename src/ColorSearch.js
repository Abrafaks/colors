import React from "react";
import "./ColorSearch.css";
import colorNames from "colornames";

function ColorSearch({ colorName, setColorName, setHexValue, checkDarkness }) {
    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-color">Add color name</label>
            <input
                type="text"
                id="search-color"
                autoFocus
                placeholder="Add color name..."
                onChange={(e) => {
                    setColorName(e.target.value);
                    const hexValue = colorNames(e.target.value);
                    if (hexValue) {
                        setHexValue(hexValue);
                        checkDarkness(hexValue);
                    }
                }}
                value={colorName}
            />
        </form>
    );
}

export default ColorSearch;
