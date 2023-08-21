//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // react - React is an open-source JavaScript library for building user interfaces (UIs) in web applications. It is maintained by Facebook and a community of developers. React is widely used for creating dynamic, interactive, and reusable UI components, making it a popular choice for building modern web and mobile applications. //

//============================================================================================================================================//

// // reactDOM

// // React uses a virtual DOM to optimize the performance of updates to the actual DOM. When data in a React component changes, React doesn't immediately update the real DOM. Instead, it first updates a virtual representation of the DOM, compares it to the previous virtual DOM snapshot, and then calculates and applies the minimal set of changes needed to update the actual DOM. This approach minimizes DOM manipulations and improves performance. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Component-Based Architecture - React is based on a component-based architecture. In React, you build your UI by creating reusable components, which are like building blocks for your application. Components can be composed together to create complex UIs. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Declarative Syntax - React uses a declarative approach to define how the UI should look based on the application's state. You describe what the UI should be like, and React takes care of updating the DOM to match that description. This is in contrast to imperative programming, where you would manually manipulate the DOM to achieve the desired UI state. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // One-way Data Flow - React enforces a unidirectional data flow. Data flows from parent components to child components, making it easier to understand and debug how data changes affect the UI. This pattern helps maintain predictable application behavior. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // JSX - JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. React components are typically defined using JSX, which makes it easy to express the structure of your UI components. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Component Lifecycle - React components have a lifecycle with various methods that allow you to hook into different stages of a component's existence. For example, you can use componentDidMount for actions to take after a component is rendered. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // State Management - React provides a way to manage component state using the useState hook (in functional components) or setState (in class components). State management allows you to handle dynamic data and reactivity in your UI. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // React Router - For building single-page applications (SPAs), React can be combined with libraries like React Router to handle client-side routing, allowing for navigation between different views or pages without full page refreshes. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Ecosystem - React has a rich ecosystem with a wide range of libraries and tools, such as Redux for state management, React Native for building mobile applications, and a plethora of third-party component libraries. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// State

// // In the context of web development and React, "state" refers to an object that holds data which influences the behavior and appearance of a user interface (UI). State represents the current condition or snapshot of a part of your application at any given time. It is a fundamental concept in React, as it enables the creation of dynamic and interactive UIs. //

//============================================================================================================================================//

// // Stateful Information - State typically contains data that can change over time as a result of user interactions, external events, or other factors. This data can be anything from user input, server responses, or the current state of a UI component. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Component-Level - In React, state is usually managed at the component level. Each component can have its own state, and changes to a component's state trigger a re-render of that component. This allows you to create components that can react to data changes and update their UI accordingly. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Mutable (but Controlled) - State in React is mutable, meaning you can change its values over time using functions like setState in class components or the useState hook in functional components. However, these changes should be controlled and follow React's rules for updating state to ensure predictable behavior. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // Props vs. State - While both props and state are used to pass data into components, there is a key difference. Props are typically passed from parent components to child components and are considered immutable within the child component. State, on the other hand, is used for managing mutable data within a component itself. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Functional component

// // In React, a functional component is a type of component that is defined as a JavaScript function. Functional components are also known as stateless components because they do not manage their own state. They are primarily responsible for rendering UI based on the props (properties) they receive and are typically used for representing presentational or UI-only elements. Functional components were initially introduced in React as a way to simplify the creation of simple, reusable UI components. //

//============================================================================================================================================//

// // more detaild in ./component/FunctionalComponent

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Class component

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
