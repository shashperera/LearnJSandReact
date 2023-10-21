// Navbar.js

import React, { useState } from "react";
import './navbar.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    // Menu change handler
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <div style={{ width: '100%', height: '15vh' }}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
            </nav>

            <div className={menuClass}>
                <div className="menu">
                    <nav>
                        <Link to="/hooks">Hooks</Link> {/* Link to the "hooks" page */}
                    </nav>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    {/* Add more menu items or links here */}
                </div>
                </div>
        </div>
    );
}

export default Navbar;
