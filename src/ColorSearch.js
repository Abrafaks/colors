import React from "react";
import "./ColorSearch.css";
import colorNames from "colornames";

function ColorSearch({ colorName, setColorName, setHexValue }) {
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
                    setHexValue(colorNames(e.target.value));
                }}
                value={colorName}
            />
        </form>
    );
}

export default ColorSearch;
