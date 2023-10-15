"use client";

import { MouseEvent, useState } from "react";
import KeyButton from "./KeyButton";

export default function Keyboard() {
  const [inputTexts, setInputTexts] = useState("");

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setInputTexts(inputTexts + e.currentTarget.value);
  };

  return (
    <div className="grid grid-cols-2">
      <p className="manchu-text m-4 text-xl">{inputTexts}</p>
      <div className="grid grid-cols-6 gap-4">
        <KeyButton
          charUnicode={[0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1828, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1828, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1828, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1828, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1828, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1828, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1874, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1874, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1874, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1874, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1874, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1874, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1864, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1864, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1864, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1864, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1864, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1864, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1865, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1865, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1865, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1865, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1865, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1865, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182a, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182a, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182a, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182a, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182a, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182a, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182b, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182b, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182b, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182b, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182b, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182b, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1830, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1830, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1830, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1830, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1830, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1830, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1867, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1867, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1867, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1867, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1867, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1867, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1832, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1832, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1832, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1832, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1832, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1832, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1869, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1869, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1869, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1869, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1869, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1869, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182f, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182f, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182f, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182f, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182f, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182f, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182e, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182e, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182e, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182e, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182e, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182e, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1834, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1834, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1834, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1834, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1834, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1834, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1835, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1835, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1835, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1835, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1835, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x1835, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182d, 0x1820]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182d, 0x185d]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182d, 0x1822]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182d, 0x1824]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182d, 0x1860]}
          handleButtonClick={handleButtonClick}
        />
        <KeyButton
          charUnicode={[0x182d, 0x1861]}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
}
