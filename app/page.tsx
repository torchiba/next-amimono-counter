"use client";

import Image from "next/image";
import { useState } from "react";

function MyButton({ count, onClick, text, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {text}
    </button>
  );
}

export default function Home() {
  const [danCount, setDanCount] = useState(0); // 段カウント
  const [meCount, setMeCount] = useState(0); //目カウント
  const [isDanActive, setDanActive] = useState(true); //トグルボタン
  const min = 0;
  const max = 999;

  //
  const handleIncrement = () => {
    if (isDanActive && danCount <= max) {
      setDanCount(danCount + 1);
    } else if (!isDanActive && meCount <= max) {
      setMeCount(meCount + 1);
    }
  };
  const handleDecrement = () => {
    console.log("danCount", danCount);
    if (isDanActive && danCount > min) {
      setDanCount(danCount - 1);
    } else if (!isDanActive && meCount > min) {
      setMeCount(meCount - 1);
    }
  };
  const toggleCount = () => {
    setDanActive(!isDanActive);
  };
  const handleReset = () => {
    if (isDanActive) {
      setDanCount(0);
    } else {
      setMeCount(0);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-5xl font-extrabold dark:text-white">
          あみものカウンター
        </h1>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isDanActive}
            onChange={() => setDanActive(!isDanActive)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <strong>{isDanActive ? "段" : "目"}</strong>を選択中
          </span>
        </label>

        <p>
          段：{danCount} / 目：{meCount}
        </p>

        <div className="grid grid-cols-3 gap-4">
          <MyButton
            onClick={handleIncrement}
            text="+"
            disabled={danCount >= max || meCount >= max}
          />
          <MyButton
            onClick={handleDecrement}
            text="-"
            disabled={danCount < min || meCount < min}
          />
          <MyButton
            onClick={handleReset}
            disabled={danCount >= max || meCount >= max}
            text="リセット"
          />
        </div>
      </main>
    </div>
  );
}
