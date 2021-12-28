import React, { Component } from 'react';
import Home from './main/home';
import Skills from './main/skills';
import Message from './main/message';
import About from './main/about';
import Contact from './main/contact';

class Main extends React.Component {
    render() { 
        return (
            <main>
                <Home />
                <About />
                <Skills />
                <Message />
                <Contact />
            </main>
        );
    }
}
 
export default Main;