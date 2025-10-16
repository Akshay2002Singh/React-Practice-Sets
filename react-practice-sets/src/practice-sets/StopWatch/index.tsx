import { useEffect, useRef, useState } from "react";
import { ShowStopWatchTime } from "./components/ShowStopWatchTime";
import { StopWatchActionBtnRow } from "./components/StopWatchActionBtnRow";
import { ShowStopWatchLaps } from "./components/ShowStopWatchLaps";

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [timeLaps, setTimeLaps] = useState<number[]>([]);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const increaseTime = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setTime((prev) => prev + 1);
    timeoutRef.current = setTimeout(() => {
      increaseTime();
    }, 1000);
  };

  const onStartBtnClick = () => {
    setIsTimerActive(true);
    increaseTime();
  };

  const onPauseBtnClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsTimerActive(false);
  };

  const onResetBtnClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsTimerActive(false);
    setTime(0);
    setTimeLaps([]);
  };

  const onLapBtnClick = () => {
    setTimeLaps((prev) => [...prev, time]);
  };

  return (
    <div>
      <ShowStopWatchTime seconds={time} />
      <StopWatchActionBtnRow
        isTimerActive={isTimerActive}
        onStartBtnClick={onStartBtnClick}
        onPauseBtnClick={onPauseBtnClick}
        onResetBtnClick={onResetBtnClick}
        onLapBtnClick={onLapBtnClick}
      />
      <ShowStopWatchLaps timeLaps={timeLaps} />
    </div>
  );
};

export default StopWatch;
