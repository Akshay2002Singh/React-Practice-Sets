# ***React-Practice-Sets***

Welcome to the React Practice Sets repository! This repository contains a collection of practice sets, each consisting of React components provided as HTML files. The purpose of these practice sets is to help you learn and practice React by building websites

## *Getting Started*
To get started with these practice sets, follow these steps:

1. Clone this repository to your local machine.
    ```Shell
    git clone https://github.com/your-username/react-practice-sets.git
    ```
2. Navigate to the specific practice set you want to work on.
3. You will find the React components here.
4. Start building your website by integrating these components into your React project.

## *Basic React Commands and Syntax*
Here are some basic React commands and syntax you'll need for working with these practice sets using function-based components:
> Try to remember syntax and commands.
* Setting up a React Environment:
    ```Shell
    npx create-react-app my-react-app
    ```
* Creating a Function-Based Component:
    ```javascript
    import React from 'react';

    function MyComponent() {
        return <div>Hello, React!</div>;
    }

    export default MyComponent;
    ```
* Using Props:
    ```javascript
    function Greeting(props) {
        return <div>Hello, {props.name}!</div>;
    }

    // Usage
    <Greeting name="John" />

    ```
* State Management: React components can use the useState hook to manage data that can change over time.
    ```javascript
    import { useState } from "react";

    function FavoriteColor() {
        const [color, setColor] = useState("");
    }
    ```
* Handling Events:
    ```javascript
    function Button() {
        const handleClick = () => {
            alert('Button clicked');
        }

        return <button onClick={handleClick}>Click me</button>;
    }
    ```
* React useEffect: 
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
* React Lists: In React, you will render lists with some type of loop. The JavaScript 'map()' array method is generally the preferred method.
    ```javascript
    function NumberList(props) {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number,index) =>
            <li key={index}> {number} </li>
        );
        
        return (
            <ul>{listItems}</ul>
        );
    }

    ```
* React Forms: 
    ```javascript
    import { useState } from 'react';

    function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input type="text" name="username" 
        value={inputs.username || ""} 
        onChange={handleChange} />
        </label>
        
        <label>Enter your age:
            <input type="number" name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
            />
            </label>
            <input type="submit" />
        </form>
    )
    }
    ```
* React Router:

    *App.js*
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
    *Home.js*
    ```javascript
    import { Link } from "react-router-dom";

    const Home = () => {
        return <>
            <Link to="/blogs">Blogs</Link>
        </>;
    };

    export default Home;
    ```



