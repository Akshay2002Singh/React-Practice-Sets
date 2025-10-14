import { useEffect, useRef, useState } from "react";
import { InputTime } from "./components/InputTime";
import { TimeOutput } from "./components/TimeOutput";
import { ActionBtnRow } from "./components/ActionBtnRow";
import "./styles.css";
import { START_BTN_STATE, type StartBtnStateType } from "./constant";

const Timer = () => {
  const [inputTime, setInputTime] = useState<string>("");
  const [timer, setTimer] = useState<number>(0);
  const [startBtnState, setStartBtnState] = useState<StartBtnStateType>(
    START_BTN_STATE.START
  );
  const timerRef = useRef<number | null>(null);

  const onInputChangeCallback = (time: string) => {
    setInputTime(time);
    setTimer(Number(time));
  };

  const onReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setStartBtnState(START_BTN_STATE.START);
    setTimer(Number(inputTime));
  };

  const onStartBtnStateToggle = () => {
    setStartBtnState((prev) => {
      if (prev === START_BTN_STATE.START) {
        startTimer(timer);
        return START_BTN_STATE.PAUSE;
      } else {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        return START_BTN_STATE.START;
      }
    });
  };

  const startTimer = (time:number) => {
    if(timerRef.current){
        clearInterval(timerRef.current);
    }
    if(time === 0){
        onStartBtnStateToggle();
        return;
    }else{
        setTimer(time-1);
        timerRef.current = setTimeout(() => {
            startTimer(time-1)
        }, 1000);
    }
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="timer-container">
      <InputTime
        inputTime={inputTime}
        onInputChangeCallback={onInputChangeCallback}
        isInputDiabled = {startBtnState === START_BTN_STATE.PAUSE}
      />
      <ActionBtnRow
        onReset={onReset}
        onStartBtnStateToggle={onStartBtnStateToggle}
        startBtnText={startBtnState}
        isResetDisabled={inputTime === '0' || inputTime === ''}
        isStartBtnDisabled={inputTime === '0' || inputTime === ''  || timer === 0}
      />
      <TimeOutput remainingSec={timer} />
    </div>
  );
};

export default Timer;
