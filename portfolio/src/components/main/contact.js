import React, { Component } from 'react';
import instagramLogo from '../../style/instagram.png';
import lineLogo from '../../style/line.png';
import discordLogo from '../../style/discord.png'; 
import social from '../../style/social.png';
import lineBarcode from '../../style/linebarcode.JPG'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(logo) {
        if (logo == "instagram") {
            window.open("https://www.instagram.com/rafidikaa/");
        }
        else if (logo == "discord") {
            window.open("https://discordapp.com/users/689778486587424994");
        }
        else if (logo == "LINE") {
            window.open(lineBarcode);
        }
    }

    render() { 
        return (
            <React.Fragment>
                <section id='contact'>
                    <div id="contact-socmed">
                        <p>Find me in other social medias</p>
                        <div id="contact-socmed-logos">
                            <img src={instagramLogo} onClick={(e) => this.handleClick("instagram",e)} className='logos' alt="Instagram"/>
                            <img src={lineLogo} onClick={(e) => this.handleClick("LINE",e)} className='logos' alt="LINE"/>
                            <img src={discordLogo} onClick={(e) => this.handleClick("discord",e)} className='logos' alt="Discord"/>
                        </div>
                    </div>
                    <div id="contact-img">
                        <img src={social} alt="People sitting with a huge phone" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Contact;