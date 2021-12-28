import React, { Component } from 'react';
import './style/style.css';
import Navbar from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';

class App extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <Main />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default App;