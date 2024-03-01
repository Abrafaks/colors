import React from "react";

function ColorSearch() {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-color">Add color name</label>
            <input
                type="text"
                id="search-color"
                autoFocus
                placeholder="Add color name..."
            />
        </form>
    );
}

export default ColorSearch;
