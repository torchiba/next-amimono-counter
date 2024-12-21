"use client";

import Image from "next/image";
import { useState } from "react";

function MyButton({ count, onClick, text, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default function Home() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 999;

  const handleCountUp = () => {
    if (count < max) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const handleCountDown = () => {
    if (count > min) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <MyButton
          onClick={handleCountUp}
          text="Count up!"
          disabled={count >= max}
        />
        <MyButton
          onClick={handleCountDown}
          text="Count down!"
          disabled={count <= min}
        />
        COUNT: {count}
      </main>
    </div>
  );
}
