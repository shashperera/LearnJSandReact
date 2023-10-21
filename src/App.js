// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import Navbar from './components/navbar';
import ReactHooks from './views/ReactHooks'; // Import the ReactHooks component
import OpenWindowButton from './components/OpenWindowButton'; // Import the OpenWindowButton component


import logo from './logo.svg';
import './App.css';

function App() {
    const [colour, setColour] = useState("Red");
    const [showOpenWindow, setOpenWindow] = useState(false);
    const [showReactHooks, setShowReactHooks] = useState(false);

    const openNewComponent = () => {
        setOpenWindow(true);
        setShowReactHooks(false)
    }

    const openReactHooks=() => {
        setShowReactHooks(true)
        setOpenWindow(false);
    }
    return (
        <Router>
            <div className="App">
                <Navbar />
                <h1>Let's learn React.</h1>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                <button type="button" onClick={() => setColour('Orange')}>
                    Orange
                </button>
                <button type="button" onClick={() => setColour('Red')}>
                    Red
                </button>
                <button type="button" onClick={() => setColour('Blue')}>
                    Blue
                </button>
                <p>{colour}</p>


                <Routes>
                {/* <Route index element={<Home />} /> */}
                    <Route path="/hooks" Component={<ReactHooks />} />
                    {/* Add more routes here if needed */}
                </Routes>

                {showReactHooks && <ReactHooks />}
      {showOpenWindow && <OpenWindowButton />}
      {!showReactHooks && !showOpenWindow && (
        <div>
          <button onClick={openReactHooks}>Open React Hooks Page</button>
          <button onClick={openNewComponent}>Open Window Hooks Page</button>
        </div>
      )}
                
            </div>
        </Router>
    );
}

export default App;
