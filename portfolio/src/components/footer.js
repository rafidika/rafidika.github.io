import React, { Component } from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.open("https://instagram.com/nabelanitaa");
    }

    render() { 
        return (
            <React.Fragment>
                <footer>
                    <p>Design by <span id="abel" onClick={this.handleClick}>Nabelanita Utami</span>. Developed with {"<"}3 by Rafidika</p>
                </footer>
            </React.Fragment>
        );
    }
}
 
export default Footer;