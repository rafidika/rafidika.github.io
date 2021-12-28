import React, { Component } from 'react';
import homeImg from '../../style/home-img.svg'

class Home extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <section id="home">
                    <div class="home-item" id="home-intro">
                        <p id="greet">Hi, I'm</p><br/>
                        <p id="name">Dika</p><br/>
                        <p id="brief-description">A student and a web developer in the making</p><br/>
                        <p id="link-to-about"><a href="#about">Know me more {'>'}</a></p>
                    </div>
                    <div className="home-item" id="home-image">
                        <img src={homeImg} alt="A man doing something with his computer" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Home;