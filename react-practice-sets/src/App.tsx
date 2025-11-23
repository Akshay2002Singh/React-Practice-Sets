import { useEffect, useRef, useState, type JSX } from "react";
import "./App.css";

import { AccordionComponent } from "./practice-sets/AccordionComponent";
import { FileExplorer } from "./practice-sets/FileExplorer";
import OtpComponent from "./practice-sets/OtpComponent";
import SearchFilter from "./practice-sets/SearchFilter";
import StopWatch from "./practice-sets/StopWatch";
import Timer from "./practice-sets/Timer";
import TodoListWithLocalStorage from "./practice-sets/TodoListWithLocalStorage";
import TrafficLight from "./practice-sets/TrafficLight";

type ComponentKey =
  | "accordion"
  | "fileExplorer"
  | "otp"
  | "searchFilter"
  | "stopwatch"
  | "timer"
  | "todo"
  | "trafficLight";

const componentMap: Record<ComponentKey, JSX.Element> = {
  accordion: <AccordionComponent />,
  fileExplorer: <FileExplorer />,
  otp: <OtpComponent />,
  searchFilter: <SearchFilter />,
  stopwatch: <StopWatch />,
  timer: <Timer />,
  todo: <TodoListWithLocalStorage />,
  trafficLight: <TrafficLight />,
};

export default function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentKey | null>(
    null
  );
  const viewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeComponent && viewRef.current) {
      viewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeComponent]);

  return (
    <div className="app-container">
      {/* Sidebar cards */}
      <div className="app-menu">
        <h2 className="app-menu-title">React Practice Sets</h2>

        <div className="app-card-list">
          <div
            className="app-card"
            onClick={() => setActiveComponent("accordion")}
          >
            Accordion Component
          </div>

          <div
            className="app-card"
            onClick={() => setActiveComponent("fileExplorer")}
          >
            File Explorer
          </div>

          <div className="app-card" onClick={() => setActiveComponent("otp")}>
            OTP Component
          </div>

          <div
            className="app-card"
            onClick={() => setActiveComponent("searchFilter")}
          >
            Search + Filter
          </div>

          <div
            className="app-card"
            onClick={() => setActiveComponent("stopwatch")}
          >
            StopWatch
          </div>

          <div className="app-card" onClick={() => setActiveComponent("timer")}>
            Timer
          </div>

          <div className="app-card" onClick={() => setActiveComponent("todo")}>
            Todo + LocalStorage
          </div>

          <div
            className="app-card"
            onClick={() => setActiveComponent("trafficLight")}
          >
            Traffic Light
          </div>
        </div>
      </div>

      {/* Render selected component */}
      <div className="app-view" ref={viewRef}>
        {activeComponent ? (
          componentMap[activeComponent]
        ) : (
          <p>Select a practice set.</p>
        )}
      </div>
    </div>
  );
}
