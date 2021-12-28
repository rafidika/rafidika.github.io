import React, { Component } from 'react';
import htmlLogo from '../../style/html5.png';
import cssLogo from '../../style/css3.png';
import jsLogo from '../../style/javascript.png';
import pythonLogo from '../../style/python3.png';
import javaLogo from '../../style/java.png';
import mysqlLogo from '../../style/mysql.png';
import reactLogo from '../../style/react.png';

class Skills extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <section id="skills">
                    <p id="skill-title">Things I am Good At</p>
                    <img src={htmlLogo} alt="HTML" className="skills-logo"/>
                    <img src={cssLogo} alt="CSS" className="skills-logo"/>
                    <img src={jsLogo} alt="JavaScript" className="skills-logo"/>
                    <img src={pythonLogo} alt="Python 3" className="skills-logo"/>
                    <img src={javaLogo} alt="Java" className="skills-logo"/>
                    <img src={mysqlLogo} alt="MySQL" className="skills-logo"/>
                    <img src={reactLogo} alt="React" className="skills-logo"/>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Skills;