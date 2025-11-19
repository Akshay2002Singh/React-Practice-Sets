import { Accordion } from "./components/Accordion";
import type { AccordionData } from "./types";

export const AccordionComponent = () => {
  const accordionData: AccordionData[] = [
    {
      id: "1",
      title: "What is React?",
      body: "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    },
    {
      id: "2",
      title: "What are React Hooks?",
      body: "Hooks are functions that let you use state and other React features without writing a class. Common hooks include useState, useEffect, and useRef.",
    },
    {
      id: "3",
      title: "What is the Virtual DOM?",
      body: "The Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM using a library such as ReactDOM.",
    },
    {
      id: "4",
      title: "What is JSX?",
      body: "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement() or appendChild().",
    },
    {
      id: "5",
      title: "What is a component in React?",
      body: "A component is a reusable piece of UI in a React application. Components can be functional or class-based and they help break the UI into independent, reusable pieces.",
    },
  ];

  return (
    <div>
      <Accordion data={accordionData} isMultipleOpenAllowed={true} />
    </div>
  );
};
