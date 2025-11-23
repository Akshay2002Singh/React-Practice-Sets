# **_React-Practice-Sets_**

🔗 **Live Demo:**: https://akshay2002singh.github.io/React-Practice-Sets/

Welcome to the React Practice Sets repository!  
This project contains a collection of small to medium-level React problems commonly asked in frontend interviews.  
Each folder inside **/src/practice-sets/** contains a standalone React component (problem) that you can practice and build.

## 📁 Practice Problems Included

Inside src/practice-sets/, you will find:

| Folder | Problem |
|------|------|
| AccordionComponent | Build an accordion with open/close behavior |
| FileExplorer | Recursive folder/file explorer with expand/collapse |
| OtpComponent | OTP input boxes with auto-focus and backspace handling |
| SearchFilter | Search + filter UI using controlled components |
| StopWatch | Stopwatch with start/stop/reset & time formatting |
| Timer | Countdown timer using setInterval |
| TodoListWithLocalStorage | Todo app with localStorage persistence |
| TrafficLight | Auto-changing traffic light component |

More sets will be added regularly to help you practice interview questions.

## _Basic React Commands and Syntax_

Here are some basic React commands and syntax you'll need for working with these practice sets using function-based components:

> Try to remember syntax and commands.

- Setting up a React Environment:
  ```Shell
  npx create-react-app my-react-app
  ```
- Creating a Function-Based Component:

  ```javascript
  import React from "react";

  function MyComponent() {
    return <div>Hello, React!</div>;
  }

  export default MyComponent;
  ```

- Using Props:

  ```javascript
  function Greeting(props) {
    return <div>Hello, {props.name}!</div>;
  }

  // Usage
  <Greeting name="John" />;
  ```

- State Management: React components can use the useState hook to manage data that can change over time.

  ```javascript
  import { useState } from "react";

  function FavoriteColor() {
    const [color, setColor] = useState("");
  }
  ```

- Handling Events:

  ```javascript
  function Button() {
    const handleClick = () => {
      alert("Button clicked");
    };

    return <button onClick={handleClick}>Click me</button>;
  }
  ```

- React useEffect:

  ```javascript
  import { useEffect } from "react";

  // No dependency passed
  useEffect(() => {
    //Runs on every render
  });

  // An empty array passed
  useEffect(() => {
    //Runs only on the first render
  }, []);

  // Props or state values passed
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]);
  ```

- React Lists: In React, you will render lists with some type of loop. The JavaScript 'map()' array method is generally the preferred method.

  ```javascript
  function NumberList(props) {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number, index) => (
      <li key={index}> {number} </li>
    ));

    return <ul>{listItems}</ul>;
  }
  ```

- React Forms:

  ```javascript
  import { useState } from "react";

  function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
  ```

- React Router:

  _App.js_

  ```javascript
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  // import components
  import Home from "./pages/Home";
  import Blogs from "./pages/Blogs";
  import NoPage from "./pages/NoPage";

  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ```

  _Home.js_

  ```javascript
  import { Link } from "react-router-dom";

  const Home = () => {
    return (
      <>
        <Link to="/blogs">Blogs</Link>
      </>
    );
  };

  export default Home;
  ```

  ## Additional Useful Topics

### 🔹 Infinite Scroll (window.innerHeight + scrollY)

```javascript
import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const loadMore = () => {
    setItems((prev) => [...prev, ...Array.from({ length: 10 })]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // make sure to add all states that are used in loadMore function otherwise you will get stale state in loadMore.

  return (
    <ul>
      {items.map((_, index) => (
        <li key={index}>Item {index + 1}</li>
      ))}
    </ul>
  );
}
```

### 🔹 Drag and Drop (HTML5 Drag Events)

```javascript
import { useState } from "react";

function DragDropExample() {
  const [items, setItems] = useState(["A", "B", "C"]);
  const [dragItemIndex, setDragItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragItemIndex(index);
  };

  const handleDrop = (index) => {
    const updated = [...items];
    const draggedItem = updated.splice(dragItemIndex, 1)[0];
    updated.splice(index, 0, draggedItem);
    setItems(updated);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "8px",
            border: "1px solid black",
            margin: "5px",
            width: "100px",
          }}
        >
          {item}
        </div>
      ))}
    </>
  );
}
```
