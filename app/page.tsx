"use client";

import { useState } from "react";

function MyButton({
  onClick, text, disabled,
}: { onClick: () => void; text: string; disabled?: boolean }) {
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
  const [danCount, setDanCount] = useState<number>(0);
  const [meCount, setMeCount] = useState<number>(0);
  const [isDanActive, setDanActive] = useState<boolean>(true);
  const [recordedCounts, setRecordedCounts] = useState<string[]>([]);
  const min = 0;
  const max = 999;
  const activeCount = isDanActive ? danCount : meCount;
  const isIncDisabled = activeCount > max;
  const isDecDisabled = activeCount < min;
  const isAllZero = danCount === 0 && meCount === 0;
  
  // 増減
  const handleIncrement = () => {
    if (activeCount >= max) return;
    if (isDanActive) {
      const next = Math.min(max, danCount + 1);
      console.log("handleIncrement - danCount", next);
      setDanCount(next);
    } else {
      const next = Math.min(max, meCount + 1);
      console.log("handleIncrement - meCount", next);
      setMeCount(next)
    }
  };
  const handleDecrement = () => {
    if (activeCount <= min) return;
    if (isDanActive) {
      const next = Math.max(min, danCount - 1);
      console.log("handleIncrement - danCount", next);
      setDanCount(next);
    } else {
      const next = Math.max(min, meCount - 1);
      console.log("handleIncrement - meCount", next);
      setMeCount(next)
    }
  };

  // 選択中の段or目をリセット
  const handleReset = () => {
    // トグルによって段か目を変える
    if (isDanActive) {
      setDanCount(0);
    } else {
      setMeCount(0);
    }
  };
  // リスト含めてすべてをリセット
  const handleAllReset = () => {
    setRecordedCounts([]);
    setDanCount(0);
    setMeCount(0);
  };
  // 次の段に移動
  const handleRecordNextDan = () => {
    // 現在の段数を記録する
    const newRecord = `${danCount}段${meCount}目`;
    setRecordedCounts((prev) => {
      const next = [newRecord, ...prev];
      console.log("handleRecordNextDan - recordedCounts(next)", next);
      return next;
    });
    setDanCount(danCount + 1);
    setMeCount(0);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-5xl font-extrabold dark:text-white">
          amimono-counter
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

        <div>
          段：<strong>{danCount}</strong> / 目：<strong>{meCount}</strong>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <MyButton
            onClick={handleIncrement}
            text="+1"
            disabled={isIncDisabled}
          />
          <MyButton
            onClick={handleDecrement}
            text="-1"
            disabled={isDecDisabled}
          />
          <MyButton onClick={handleRecordNextDan} text="次の段に移動" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <MyButton
            onClick={handleReset}
            disabled={isAllZero}
            text={isDanActive ? "段をリセット" : "目をリセット"}
          />
          <MyButton
            onClick={handleAllReset}
            disabled={isAllZero}
            text="すべてをリセット"
          />
        </div>
        <ul>
          {recordedCounts.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
