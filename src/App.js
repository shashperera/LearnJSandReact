// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import Navbar from './components/navbar';
import ReactHooks from './views/ReactHooks'; // Import the ReactHooks component
import OpenWindowButton from './views/OpenWindowButton'; // Import the OpenWindowButton component
import Grids from "./views/Grids";
import './App.css';
import Async from './views/async';

function App() {
    const [colour, setColour] = useState("Red");
    const [showOpenWindow, setOpenWindow] = useState(false);
    const [showReactHooks, setShowReactHooks] = useState(false);
    const [showGrid, setShowGrid] = useState(false);


    const openNewComponent = () => {
        setOpenWindow(true);
        setShowReactHooks(false)
    }

    const openReactHooks = () => {
        setShowReactHooks(true)
        setOpenWindow(false);
    }

    const openGrid = () => {
        setShowGrid(true);
    }



    const styles={
        grid: {
            backgroundColor: '#0458',
            display: 'grid',
            padding: '20px',
            gridGap:'20px',
            gridColumnGap: '20px',
            gridRowGap: '50px', // Adjusted grid row gap
            gridTemplateColumns: 'repeat(3, 1fr)', // Adjusted grid columns
            gridTemplateRows: 'repeat(3, 1fr)', // Adjusted grid columns
        
          },
        
          gridItem:{
            backgroundColor: 'white',
            fontSize: '20px',
            padding: '20px',
            textAlign: 'center',
          },

        Button:{

        },
    }

    return (
        <Router>
            <div className="App">
                <Navbar />
                <h1>Let's learn React.</h1>



                <Routes>
                    <Route path="/hooks" element={<ReactHooks />} />
                    <Route path="/async" element={<Async />} />
                    {/* Add more routes here if needed */}
                </Routes>

                {showReactHooks && <ReactHooks />}
                {showOpenWindow && <OpenWindowButton />}
                {showGrid && <Grids />}

                {!showReactHooks && !showOpenWindow && !showGrid && (
                    <div style={styles.grid}>
                        <button class='btn btn-warning' style={styles.gridItem}>jdj</button>
                        <button style={styles.gridItem} onClick={openReactHooks}>Open React Hooks Page</button>
                        <button  style={styles.gridItem} onClick={openNewComponent}>Difference between state and props in React.</button>
                        <button  style={styles.gridItem} onClick={openGrid}>Grids</button>

                    </div>
                )}

            </div>
        </Router>
    );
}

export default App;
