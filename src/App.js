import "./styles.css";
import React, { useState } from "react";
import Translate from "./components/translate";

export default function App() {
  const [text, setText] = useState("Реакция");

  return (
    <>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Translate text={text} />
    </>
  );
}
