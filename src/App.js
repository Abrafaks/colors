import { useState } from "react";
import "./App.css";
import ColorSearch from "./ColorSearch";
import ColorSquare from "./ColorSquare";

function App() {
    const [colorName, setColorName] = useState("");
    const [hexValue, setHexValue] = useState("");
    const [isDarkText, setIsDarkText] = useState(true);

    const checkDarkness = () => {
        const r = parseInt(hexValue.substring(1, 2), 16);
        const g = parseInt(hexValue.substring(3, 2), 16);
        const b = parseInt(hexValue.substring(5, 2), 16);

        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

        setIsDarkText(luminance < 0.5);
    };

    return (
        <div className="app">
            <ColorSquare
                colorName={colorName}
                hexValue={hexValue}
                isDarkText={isDarkText}
            />
            <ColorSearch
                colorName={colorName}
                setColorName={setColorName}
                setHexValue={setHexValue}
                checkDarkness={checkDarkness}
            />
        </div>
    );
}

export default App;
