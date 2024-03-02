import React from "react";
import "./ColorSearch.css";

function ColorSearch({ colorName, setColorName }) {
    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-color">Add color name</label>
            <input
                type="text"
                id="search-color"
                autoFocus
                placeholder="Add color name..."
                onChange={(e) => setColorName(e.target.value)}
                value={colorName}
            />
        </form>
    );
}

export default ColorSearch;
