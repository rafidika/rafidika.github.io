import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'; 
import messageImg from '../../style/message.png';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.htmlRef = React.createRef();
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("personal_message","message_template",this.htmlRef.current,"user_geVimDdlGMRIwrYSXbL6y")
        .then((result) => {
            window.alert("Your message was sent successfully!");
        }, (error) => {
            window.alert("Your message was not sent successfully :( \nPlease try again");
        });
    }

    render() { 
        return (
            <React.Fragment>
                <section id="message">
                    <div id="message-form">
                        <p>Send me a message!</p>
                        <form ref={this.htmlRef} onSubmit={this.sendEmail}>
                            <label htmlFor="form-input-nama" className='form-element form-label'>What is your name?</label>
                            <input type="text" name="nama" id="form-input-nama" placeholder='Your name' className='form-element form-input' required/>
                            <label htmlFor='form-input-subject' className="form-element form-label">Subject</label>
                            <input type="text" name='subject' id="form-input-subject" placeholder="Your message's subject" className='form-element form-input' required />
                            <label htmlFor="form-input-message" className="form-element form-label">Your message</label>
                            <textarea name='message' id="form-input-message" placeholder="Your message here" className="form-element form-input" required></textarea>
                            <button type="submit" id="form-submit" className="form-element">Send</button>
                        </form>
                    </div>
                    <div id="message-img">
                        <img src={messageImg} alt='A person with a gigantic email logo' />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Message;