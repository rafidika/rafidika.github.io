import React, { Component } from 'react';

class About extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <section id="about">
                    <div id="about-content">
                        <div id="about-content-title">
                            <p>About me</p>
                            <div id="about-content-title-line"></div>
                        </div>
                        <p id="about-content-description">
                        Hi there! My name is Rafidika, but you can call me Dika. I am a third year computer science student at Institut Teknologi Bandung, currently
                        pursuing a career as a Front End Developer. I've been doing projects throughout my life as a student while also improving the skills needed
                        for the Front End job. If you have any suggestions, critics, or something to share, feel free to send me a message or contact me! Have a good 
                        day :D
                        </p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default About;