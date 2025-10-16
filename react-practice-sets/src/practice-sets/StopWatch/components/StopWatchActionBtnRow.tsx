import React from "react";

export const StopWatchActionBtnRow = ({
  isTimerActive,
  onStartBtnClick,
  onPauseBtnClick,
  onResetBtnClick,
  onLapBtnClick,
}: {
  isTimerActive: boolean;
  onStartBtnClick: () => void;
  onPauseBtnClick: () => void;
  onResetBtnClick: () => void;
  onLapBtnClick: () => void;
}) => {
  return (
    <div className="stop-watch-action-btn-row">
      {isTimerActive ? (
        <>
          <button onClick={onLapBtnClick}>Lap</button>
          <button onClick={onPauseBtnClick}>Pause</button>
        </>
      ) : (
        <>
          <button onClick={onResetBtnClick}>Reset</button>
          <button onClick={onStartBtnClick}>Start</button>
        </>
      )}
    </div>
  );
};
