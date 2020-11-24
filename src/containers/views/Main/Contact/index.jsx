import React, {Component} from 'react';
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.contactSubmit = this.contactSubmit.bind(this);
        this.fname = React.createRef();
        this.lname = React.createRef();
        this.country = React.createRef();
        this.subject = React.createRef();
    }
    contactSubmit(event){
        //Contact Logic
        event.preventDefault();
        console.log(this.fname.current.value)
        console.log(this.lname.current.value)
        console.log(this.country.current.value)
        console.log(this.subject.current.value)
        
    }
    render() {
        return (
            <div className="container">
                <h1>Contact Us - AchieversIT</h1>
                <form onSubmit={this.contactSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" ref={this.fname} placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" ref={this.lname} placeholder="Your last name.." />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" ref={this.country}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" ref={this.subject} placeholder="Write something.." style={{height:'200px'}}></textarea>
                    <input type="submit" value="Submit" />
                </form>
                </div>
        );
    }
}

export default Contact;