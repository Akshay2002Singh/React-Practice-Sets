import "./styles.css";
import { useState } from "react";
import { InputRow } from "./components/InputRow";
import { TimerOutput } from "./components/TimerOutput";

const MultipleTimers = () => {
  const [inputTimerValue, setInputTimeValue] = useState("");
  const [timers, setTimers] = useState([]);

  const deduceSingleTimer = (id) => {
    setTimers((prev) => {
      let newTimers = [...prev];
      let temp = newTimers.find((ele) => ele.id === id);
      temp.remainingTime = temp.remainingTime - 1;
      if (temp.remainingTime === 0) {
        clearInterval(temp.ref);
        temp.ref = null;
      }

      return newTimers;
    });
  };

  const pauseSingleTimer = (id) => {
    setTimers((prev) => {
      let newTimers = [...prev];
      let temp = newTimers.find((ele) => ele.id === id);

      clearInterval(temp.ref);
      temp.ref = null;

      return newTimers;
    });
  };

  const startSingleTimer = (id) => {
    setTimers((prev) => {
      let newTimers = [...prev];
      let temp = newTimers.find((ele) => ele.id === id);
      if (temp.remainingTime === 0) {
        temp.remainingTime = temp.initialTime;
      }
      if (temp.ref === null) {
        temp.ref = setInterval(() => {
          deduceSingleTimer(id);
        }, 1000);
      }

      return newTimers;
    });
  };

  const addNewTimer = (time) => {
    if (time == false) {
      return;
    }
    setTimers((prev) => {
      let newTimers = [...prev];
      const id = Date.now();
      newTimers.push({
        id: id,
        initialTime: Number(time),
        remainingTime: Number(time),
        ref: setInterval(() => {
          deduceSingleTimer(id);
        }, 1000),
      });

      return newTimers;
    });
    setInputTimeValue("");
  };

  return (
    <>
      <InputRow
        inputTimerValue={inputTimerValue}
        setInputTimerValue={setInputTimeValue}
        addNewTimer={addNewTimer}
      />
      <div id="multi-timer-output-container">
        {timers.map((timerObject) => (
          <TimerOutput
            key={timerObject.id}
            time={timerObject.remainingTime}
            startSingleTimer={() => startSingleTimer(timerObject.id)}
            pauseSingleTimer={() => pauseSingleTimer(timerObject.id)}
            isPaused={timerObject.ref === null}
          />
        ))}
      </div>
    </>
  );
};

export default MultipleTimers;
