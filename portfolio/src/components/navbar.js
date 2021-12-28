import React, { Component } from 'react';
import home from "../style/home.png"

class Navbar extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <header>
                    <nav class="navbar">
                        <div id="navbar-logo">
                            <a href="#home"><img src={home} alt="Home"/></a>
                        </div>
                        <div id="navbar-menu">
                            <a href="#about" className="navbar-menu-item">About</a>
                            <a href="#skills" className="navbar-menu-item">Skills</a>
                            {/* <a href="#projects" className="navbar-menu-item">Projects</a> */}
                            <a href="#message" className="navbar-menu-item">Send a Message</a>
                            <a href="#contact" className="navbar-menu-item">Contact</a>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}
 
export default Navbar;