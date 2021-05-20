import React, {useState}  from 'react'
import "./style.css"
import { Container } from "@material-ui/core";
import { Component } from 'react';


//const Contact = ()=>{
class Contact extends React.Component{
    constructor(){
super();
this.state ={
    name: '',
    email: '',
    phoneN: '',
    message: ''
}
this.handleSubmit = this.handleSubmit.bind(this);
this.name = this.name.bind(this);
this.email = this.email.bind(this);
this.phoneN = this.phoneN.bind(this);
this.message = this.message.bind(this);
}

name(event){
    this.setState({name: event.target.value})
}
email(event){
    this.setState({email: event.target.value})
}
phoneN(event){
    this.setState({phoneN: event.target.value})
}
message(event){
    this.setState({message: event.target.value})
}

async handleSubmit(event){
    event.preventDefault();
    var reset = document.getElementsByName('contact-form')[0];
    fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
        })
        .then(
            (response)=> (response.json())
        ).then((response) =>{
           if(response.status ==='success') {
               alert('Wiadomość wysłana pomyślnie - dziękujemy za kontakt!');
               reset.reset();
        }else if(response.status === 'fail') {
            alert("Nie udało się wysłać wiadomości...")
        }
    })
}
render(){
    return (
        <div class="contactContainer">
           <form onSubmit={this.handleSubmit.bind(this)} method="POST" name="contact-form">
            <div class="row col-xs-12 col-sm-12">
                <h1>Skontaktuj się</h1>
            </div>
            <div class="row input-container">
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <input type="text" onChange={this.name} required />
                        <label>Imię</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" onChange={this.email} required />
                        <label>Adres email</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" >
                        <input type="text" required onChange={this.phoneN}/>
                        <label>Numer telefonu</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <textarea  onChange={this.message} required></textarea>
                        <label>Wiadomość</label>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <div class="submit-btn"> 
                        <button type="submit" className="btn noStyle">Wyślij wiadomość</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
  }  
}
export default Contact;
