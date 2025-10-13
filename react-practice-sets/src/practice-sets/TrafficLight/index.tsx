import { useEffect, useRef, useState } from "react";
import LightBloc from "./components/LightBloc";
import {
  LIGHT_NAMES,
  LIGHT_ORDER,
  LIGHT_TIMING,
  type LightName,
} from "./constant";

const TrafficLight = () => {
  const [currentActiveLight, setCurrentActiveLight] =
    useState<LightName | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const changeLight = (index: number = 0) => {

    setCurrentActiveLight(LIGHT_ORDER[index]);

    const nextIndex = index + 1 < LIGHT_ORDER.length ? index + 1 : 0;
    timeoutRef.current = setTimeout(() => {
      changeLight(nextIndex);
    }, LIGHT_TIMING[LIGHT_ORDER[index]]);
  };

  useEffect(() => {
    changeLight();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <LightBloc
        light={currentActiveLight === LIGHT_NAMES.RED ? LIGHT_NAMES.RED : null}
      />
      <LightBloc
        light={
          currentActiveLight === LIGHT_NAMES.YELLOW ? LIGHT_NAMES.YELLOW : null
        }
      />
      <LightBloc
        light={
          currentActiveLight === LIGHT_NAMES.GREEN ? LIGHT_NAMES.GREEN : null
        }
      />
    </div>
  );
};

export default TrafficLight;
