import { useState } from "react";
import "./App.css";
import ColorSearch from "./ColorSearch";
import ColorSquare from "./ColorSquare";

function App() {
    const [colorName, setColorName] = useState("");
    return (
        <div className="app">
            <ColorSquare colorName={colorName} />
            <ColorSearch colorName={colorName} setColorName={setColorName} />
        </div>
    );
}

export default App;
