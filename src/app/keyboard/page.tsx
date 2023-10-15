"use client";

import { MouseEvent, useState } from "react";
import KeyButton from "./KeyButton";

export default function Keyboard() {
  const [inputTexts, setInputTexts] = useState("");

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setInputTexts(inputTexts + e.currentTarget.value);
  };

  return (
    <div>
      <p>{inputTexts}</p>
      <KeyButton handleButtonClick={handleButtonClick} />
    </div>
  );
}
