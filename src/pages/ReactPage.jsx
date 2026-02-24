import React from "react";
import Accordion from "../components/Accordion";

function ReactPage() {
  const data = [
    {
      question: "Explain the core concepts of React",
      answer: `
React is a JavaScript library for building user interfaces using a component-based architecture. 
The main idea behind React is to break the UI into small reusable components, each responsible for its own structure and behavior.

There are several core concepts:

1. Components  
Everything in React is a component. Components can be reused across the application. This improves maintainability and modularity.

2. JSX  
JSX allows writing HTML-like syntax inside JavaScript. It makes UI code more readable and declarative. JSX gets converted into React.createElement calls internally.

3. Virtual DOM  
React keeps a virtual representation of the DOM. When data changes, React compares the new virtual DOM with the previous one and updates only the parts that changed.

4. State  
State stores dynamic data inside a component. When state changes, React re-renders the component.

5. Props  
Props allow passing data from parent components to child components.

6. One-way data flow  
Data flows from parent to child, making debugging easier and behavior predictable.

These core ideas make React efficient, scalable, and easier to maintain in large applications.
`,
    },

    {
      question: "What is the difference between props and state in React?",
      answer: `
Props and state are both used to manage data in React, but they serve different purposes.

Props are read-only data passed from a parent component to a child component. 
They allow components to be reusable by making them configurable. 
A child component cannot modify props.

State is internal to a component and is used to manage dynamic data. 
State can change over time, and when it changes, React re-renders the component.

Props:
- Passed from parent
- Immutable
- Used for configuration

State:
- Managed inside component
- Mutable via setter functions
- Used for dynamic behavior

Props represent external data, while state represents internal data.
`,
    },

    {
      question: "Name any 5 hooks and explain any two of them",
      answer: `
Common React hooks include:
useState  
useEffect  
useRef  
useMemo  
useCallback  

useState:
This hook allows functional components to have state. It returns a state value and a setter function. When state changes, the component re-renders.

useEffect:
This hook is used to handle side effects like API calls, timers, subscriptions, or DOM updates. 
It runs after the component renders and can run conditionally based on dependencies.

Hooks allow functional components to handle logic that previously required class components.
`,
    },

    {
      question: "Explain Virtual DOM in React",
      answer: `
The Virtual DOM is a lightweight copy of the real DOM stored in memory. 
When state or props change, React creates a new virtual DOM tree and compares it with the previous one.

This process is called diffing. React identifies what has changed and updates only those parts in the real DOM.

Direct DOM manipulation is expensive. By updating only necessary nodes, React improves performance.

The Virtual DOM is one of the key reasons React applications are efficient and fast.
`,
    },

    {
      question: "Difference between useCallback and useMemo",
      answer: `
Both useMemo and useCallback are performance optimization hooks.

useMemo:
Memoizes a value. It prevents expensive calculations from running on every render.

useCallback:
Memoizes a function. It prevents functions from being recreated on every render.

Why it matters:
When passing functions to child components, new function references can cause unnecessary re-renders. useCallback prevents this.

useMemo is used for values.
useCallback is used for functions.
`,
    },

    {
      question: "How to pass data from one child to another component",
      answer: `
In React, data flows from parent to child. To pass data from one child to another, 
we lift the state up to the parent component.

The parent holds the state and passes it down to both children via props.

Child A updates state → parent updates → child B receives new props.

This pattern is called lifting state up and ensures data consistency across components.
`,
    },

    {
      question: "What are Higher Order Components in React",
      answer: `
A Higher Order Component (HOC) is a function that takes a component and returns a new component. 
It is used to reuse component logic.

HOCs are commonly used for:
- Authentication checks
- Logging
- Data fetching
- Permissions

Instead of repeating logic in multiple components, we wrap them in an HOC.

An HOC does not modify the original component. It returns an enhanced version.
`,
    },

    {
      question: "Difference between functional and class components",
      answer: `
Functional components are simple JavaScript functions that return JSX. 
They use hooks for state and lifecycle behavior.

Class components are ES6 classes that extend React.Component. 
They use lifecycle methods and this.state.

Functional components are now preferred because:
- Less boilerplate
- Easier to read
- Hooks support
- Better performance patterns

Class components are still used in legacy code.
`,
    },

    {
      question: "What is JSX",
      answer: `
JSX stands for JavaScript XML. It allows writing HTML-like syntax inside JavaScript. 
JSX is not HTML; it is syntax that gets compiled into React.createElement calls.

JSX makes UI code more readable and declarative. 
It allows embedding JavaScript expressions inside curly braces.

JSX helps keep UI structure and logic together in the same file.
`,
    },

    {
      question: "What is state management in React?",
      answer: `
State management refers to how we manage and share data across components.

Small apps:
useState is enough.

Medium apps:
Context API or useReducer.

Large apps:
Redux, Zustand, Recoil.

State management ensures consistent data flow and predictable UI updates.
`,
    },

    {
      question: "Explain lifting state up",
      answer: `
Lifting state up means moving state to the nearest common parent when multiple components need access to the same data.

Instead of each component managing its own state, the parent holds the state and passes it down via props.

This ensures synchronization between components.
`,
    },

    {
      question: "What is conditional rendering?",
      answer: `
Conditional rendering means displaying different UI based on conditions.

React allows:
if statements  
ternary operators  
logical AND (&&)

This helps create dynamic user interfaces that respond to user actions or data changes.
`,
    },
    // CONTINUATION — DO NOT redeclare array, just append these objects

    {
      question:
        "Explain useEffect hook. Also explain where we use it and how to handle promises inside it",
      answer: `
useEffect is a hook used to handle side effects in React functional components. 
Side effects are operations that interact with the outside world or affect things beyond rendering UI.

Examples of side effects:
- API calls
- Timers
- Event listeners
- Local storage updates
- Subscriptions

useEffect runs after the component renders. It can run:
• after every render  
• only once after mount  
• when specific dependencies change  

Dependency array behavior:
No array → runs after every render  
Empty array → runs once after mount  
With dependencies → runs when dependency changes  

Cleanup:
useEffect can return a cleanup function. This runs when the component unmounts 
or before the next effect runs. It is used to clear timers or cancel subscriptions.

Handling promises:
We cannot make the useEffect function async directly. Instead, define an async function inside it and call it.

useEffect helps keep rendering logic separate from side effects and is one of the most important hooks in React.
`,
    },

    {
      question: "What is useReducer hook in React?",
      answer: `
useReducer is used for managing complex state logic in React. It is similar to Redux's reducer pattern.

Instead of updating state directly with multiple setState calls, we dispatch actions to a reducer function. 
The reducer receives the current state and an action, then returns the new state.

useReducer is useful when:
- State has multiple related values
- Updates depend on previous state
- Logic becomes complex
- You want predictable state transitions

Compared to useState:
useState → simple state  
useReducer → complex structured state  

It improves maintainability in large components and makes logic easier to test.
`,
    },

    {
      question: "Usage and explanation of useContext",
      answer: `
useContext allows sharing data across multiple components without passing props manually at every level.

Normally data flows parent → child. But in deep component trees, passing props through many layers 
can become difficult. This is called prop drilling.

Context solves this by allowing a value to be provided at a higher level and consumed anywhere below.

Common use cases:
- Authentication data
- Theme settings
- Language selection
- Global configuration

However, whenever context value changes, all components using that context re-render. 
So it should be used carefully and not for frequently changing large data.
`,
    },

    {
      question:
        "What is the difference between useContext and a state management library?",
      answer: `
useContext is built into React and is useful for sharing global data across components.

However, it is best suited for small to medium apps or for data that doesn’t change frequently.

State management libraries like Redux provide:
- Centralized store
- Middleware support
- Debugging tools
- Better performance control
- Predictable updates

useContext is simple and lightweight.
Redux or other libraries are better for large, complex applications.
`,
    },

    {
      question: "What are lifecycle methods in React?",
      answer: `
Lifecycle methods describe different phases of a component’s life.

Mounting:
componentDidMount runs after component is added to DOM.

Updating:
componentDidUpdate runs when props or state change.

Unmounting:
componentWillUnmount runs before component is removed from DOM.

In functional components, useEffect replaces lifecycle methods.
The cleanup function inside useEffect replaces componentWillUnmount.
`,
    },

    {
      question:
        "What is the difference between useEffect and componentDidMount?",
      answer: `
componentDidMount is a lifecycle method used in class components. 
It runs once after the component is mounted.

useEffect with an empty dependency array behaves the same way. 
It runs once after the component mounts.

useEffect is more flexible because it can also run on updates and cleanup.
componentDidMount only handles mounting.
`,
    },

    {
      question: "What does React.Fragment do?",
      answer: `
React.Fragment allows grouping multiple elements without adding an extra DOM node.

Normally React components must return one parent element. 
Fragment allows returning multiple elements without wrapping them in a div.

This keeps the DOM clean and avoids unnecessary nodes.
`,
    },

    {
      question: "Differentiate between stateful and stateless components",
      answer: `
Stateful components manage their own state and can update UI based on changes.

Stateless components do not manage state and only render based on props.

In modern React, functional components can be both stateful and stateless depending on whether they use hooks.
`,
    },

    {
      question: "What is a Custom Hook?",
      answer: `
A custom hook is a reusable function that uses React hooks internally.

It allows extracting logic from components and reusing it across multiple components.

Custom hooks start with the word 'use'. 
They help separate logic from UI and improve code reusability.
`,
    },

    {
      question: "What are react-router methods?",
      answer: `
React Router is used for navigation in React applications.

Important methods:
useNavigate → programmatic navigation
useParams → access URL parameters
useLocation → access route information
Link → navigation without page reload
Route → defines route mapping

React Router enables building single-page applications with multiple pages.
`,
    },

    {
      question: "What is lazy loading and code splitting?",
      answer: `
Lazy loading means loading components only when needed instead of loading everything at once.

Code splitting breaks the application bundle into smaller chunks.

Benefits:
- Faster initial load
- Reduced bundle size
- Better performance

React provides React.lazy and Suspense for implementing lazy loading.
`,
    },

    {
      question: "What are different types of rendering methods?",
      answer: `
React supports different rendering approaches:

Client-side rendering (CSR):
Rendering happens in browser.

Server-side rendering (SSR):
HTML generated on server.

Static site generation (SSG):
Pages generated at build time.

Incremental static regeneration (ISR):
Static pages updated after deployment.

Each method is used depending on performance and SEO requirements.
`,
    },

    {
      question: "How does React work internally?",
      answer: `
React works using a virtual DOM and reconciliation process.

Steps:
1. Component renders and virtual DOM is created.
2. State or props change.
3. New virtual DOM is created.
4. React compares old and new virtual DOM.
5. Finds differences.
6. Updates only changed parts in real DOM.

This makes React efficient and reduces unnecessary DOM updates.
`,
    },

    {
      question: "How to increase performance in React?",
      answer: `
Performance improvements include:
- React.memo
- useMemo
- useCallback
- Lazy loading
- Code splitting
- Avoid unnecessary re-renders
- Proper keys in lists
- Virtualization for large lists

The main goal is to minimize unnecessary rendering and DOM updates.
`,
    },

    {
      question: "When does a component re-render in React?",
      answer: `
A component re-renders when:
- Its state changes
- Its props change
- Its parent re-renders
- Context value changes

React compares virtual DOM trees and updates only necessary DOM nodes.

Re-render does not mean full DOM update. 
It only updates parts that changed.
`,
    },
    // CONTINUATION — append to same array

    {
      question: "What is a pure component in React?",
      answer: `
A pure component is a component that only re-renders when its props or state actually change. 
It performs a shallow comparison of previous and new props/state before deciding to re-render.

In class components, React.PureComponent provides this behavior automatically. 
In functional components, React.memo provides similar functionality.

Why this matters:
Normally, when a parent component re-renders, all child components re-render as well. 
Pure components prevent unnecessary re-renders and improve performance.

However, pure components only do shallow comparison. 
If props contain nested objects that change reference but not value, 
the component may still re-render.

Pure components are useful when rendering is expensive or when components receive stable props.
`,
    },

    {
      question: "What is React.memo and how does it optimize performance?",
      answer: `
React.memo is a higher-order component used with functional components to prevent unnecessary re-renders.

When a component is wrapped with React.memo, React compares the previous props with new props. 
If props are the same, React skips rendering that component.

This is useful when:
- Component is expensive to render
- Props rarely change
- Parent re-renders frequently

However, using React.memo everywhere is not recommended. 
It adds comparison overhead and should be used only when performance benefits are clear.
`,
    },

    {
      question: "Why can't we mutate state directly in React?",
      answer: `
React relies on state immutability to detect changes. 
When state updates, React compares previous and new state references.

If we mutate state directly, React may not detect that anything changed 
because the reference remains the same.

This can cause:
- UI not updating
- Bugs
- Inconsistent rendering

Instead of mutating state:
We create a new state object using setter functions.

Immutability ensures React can correctly detect updates and re-render components.
`,
    },

    {
      question:
        "When rendering lists in React, what helps determine what needs to be re-rendered?",
      answer: `
Keys help React identify which elements changed in a list.

When rendering lists, React compares previous and new list items. 
Keys tell React which items are added, removed, or updated.

Without keys:
React may re-render entire list.

With proper keys:
React updates only changed elements.

Keys must be:
- Unique
- Stable
- Derived from data

Using array index as key is not recommended for dynamic lists 
because it can cause incorrect updates.
`,
    },

    {
      question: "Explain useRef Hook in React",
      answer: `
useRef is used to store mutable values that persist across renders 
without causing re-renders.

It has two main uses:
1. Access DOM elements directly
2. Store values between renders

Unlike state, updating a ref does not trigger a re-render.

Common use cases:
- Focusing input fields
- Storing previous values
- Managing timers
- Measuring DOM elements

useRef provides a way to interact with DOM directly when needed.
`,
    },

    {
      question: "Explain props drilling in React",
      answer: `
Props drilling happens when props are passed through multiple layers 
of components just to reach a deeply nested component.

This can make code harder to maintain and understand.

Example:
App → Layout → Sidebar → Button  
If Button needs data, all components in between must pass it.

Solution:
- Context API
- State management libraries

Props drilling is not always bad, but excessive drilling 
indicates poor state structure.
`,
    },

    {
      question: "What are controlled and uncontrolled components?",
      answer: `
Controlled components store form data in React state. 
Every input change updates state, and the UI reflects that state.

Uncontrolled components store form data in the DOM. 
We use refs to access values.

Controlled components:
- More predictable
- Easier validation
- Preferred in React

Uncontrolled components:
- Simpler
- Less code
- Useful for quick forms

Most production apps use controlled components.
`,
    },

    {
      question: "How does React decide which component to re-render?",
      answer: `
React re-renders a component when:
- Its state changes
- Its props change
- Context changes
- Parent re-renders

However, React does not update the entire DOM. 
It compares virtual DOM trees and updates only necessary nodes.

React also allows optimization using:
- React.memo
- useMemo
- useCallback

These tools help prevent unnecessary re-renders.
`,
    },

    {
      question: "Does the entire tree re-render when state changes?",
      answer: `
When state changes in a component, that component re-renders. 
By default, its child components also re-render.

However, React optimizations like React.memo prevent unnecessary child renders.

Even though component functions may re-run, 
React updates only changed DOM elements.

So:
Component functions may re-run  
But DOM updates are minimal
`,
    },

    {
      question:
        "How to design a React application to display 1000 cards efficiently?",
      answer: `
Rendering large lists can impact performance.

Best strategies:
1. Virtualization (react-window or react-virtualized)
Render only visible items.

2. Pagination
Load items in chunks.

3. Memoization
Use React.memo to prevent re-renders.

4. Lazy loading
Load components only when needed.

Rendering all 1000 items at once can cause performance issues. 
Virtualization ensures only visible items render.
`,
    },

    {
      question: "What is conditional rendering and how does it work?",
      answer: `
Conditional rendering means displaying different UI based on conditions.

We can use:
- if statements
- ternary operators
- logical &&

Example:
If user is logged in → show dashboard  
Else → show login page

This allows dynamic UI updates based on state or props.
`,
    },

    {
      question:
        "What are the latest features introduced in recent React versions?",
      answer: `
Recent React versions introduced:

Automatic batching:
Multiple state updates grouped together.

Concurrent rendering:
Allows React to pause and resume rendering.

useTransition:
Marks updates as low priority.

useDeferredValue:
Delays non-urgent updates.

Server components:
Allows heavy logic to run on server.

These features improve performance and responsiveness.
`,
    },

    {
      question: "How does React handle lifecycle compared to traditional DOM?",
      answer: `
Traditional DOM manipulation is imperative. 
Developers manually update DOM elements.

React uses a declarative approach. 
Developers describe UI, and React updates DOM automatically.

React lifecycle:
Mount → Update → Unmount

Instead of manual DOM updates, React manages changes using virtual DOM.
`,
    },

    {
      question: "In which lifecycle method should cleanup tasks run?",
      answer: `
Cleanup tasks like clearing timers or cancelling API requests 
should run during component unmount.

In class components:
componentWillUnmount

In functional components:
return function inside useEffect

Cleanup prevents memory leaks and unexpected behavior.
`,
    },

    {
      question: "How React scales in large applications?",
      answer: `
Large React apps require good architecture.

Best practices:
- Keep components small
- Use state wisely
- Split code into modules
- Lazy load routes
- Avoid unnecessary re-renders
- Use memoization
- Use virtualization for large lists

Scaling React is more about structure than syntax.
`,
    },
  ];

  // const data = [...reactDataPart1, ...reactDataPart2];
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">HTML Questions</h1>
      <Accordion data={data} />
    </div>
  );
}

export default ReactPage;
