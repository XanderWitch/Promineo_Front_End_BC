//react component is a function that returns JSX

import "./styles.css";
import React from "react";

export default function App() {
    return <div>
            <h1>Hello World</h1>
        <Name name="Evan"/>
        <Name name="Austin"/> //attributes
        <Name />
    </div>
;
}

//can use class components or function components
//react components upper camel case
function Name(props) {
    return <h2>Evan</h2>;
}

//props - attributes are key value pairs (like "type" with "input")
//function has inputs and outputs, give inputs to components as arguments and treat them as function arguments
//interporlation - within JSX reference JS values put curly braces around variables
//parameterization - allow arguments to be passed in
//JS - objects are key value pairs