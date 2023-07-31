import React from "react";
import logo from "/src/images/react-icon.png";

export default function Navbar() {
    return (
        <nav className="Navbar">
            <img src={logo} className="nav-icon" />
            <h3 className="nav-iconText">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    );
}
