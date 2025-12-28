import React from "react";

export const TimerOutput = ({
  time,
  startSingleTimer,
  pauseSingleTimer,
  isPaused,
}) => {
  const second = Number(time % 60)
    .toString()
    .padStart(2, "0");
  const min = Math.floor(Number(time / 60))
    .toString()
    .padStart(2, "0");
  return (
    <div className="multi-timer-output">
      <span>{min + ":" + second}</span>
      {isPaused ? (
        <button onClick={startSingleTimer}>Start</button>
      ) : (
        <button onClick={pauseSingleTimer}>Pause</button>
      )}
    </div>
  );
};
