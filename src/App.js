import { useState } from "react";
import "./App.css";
import ColorSearch from "./ColorSearch";
import ColorSquare from "./ColorSquare";

function App() {
    const [colorName, setColorName] = useState("");
    const [hexValue, setHexValue] = useState("");
    return (
        <div className="app">
            <ColorSquare colorName={colorName} hexValue={hexValue} />
            <ColorSearch
                colorName={colorName}
                setColorName={setColorName}
                setHexValue={setHexValue}
            />
        </div>
    );
}

export default App;
