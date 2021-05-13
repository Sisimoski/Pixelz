import React, {useState}  from 'react'
import "./style.css"
import { Container } from "@material-ui/core";
//tu

const Contact = ()=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneN, setPhoneN] = useState("")
    const [message, setMessage] = useState("")

    const PostData = () =>{
        fetch("/send",{
            method: "post",
            headers:{
                "Content-Type" : "application/json"
            },
        body:JSON.stringify({
            name,
            email,
            phoneN,
            message
            })
        }).then(res=>res.json())
        .then(data=>{
            alert(data.message)
            setMessage('')
            setName('')
            setEmail('')
            setPhoneN('')
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div class="contactContainer">
           
            <div class="row col-xs-12 col-sm-12">
                <h1>Skontaktuj się</h1>
            </div>
            <div class="row input-container">
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <input type="text" value={name}onChange={(e)=>setName(e.target.value)} required />
                        <label>Imię</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" value={email}onChange={(e)=>setEmail(e.target.value)} required />
                        <label>Adres email</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" >
                        <input type="text" required value={phoneN}onChange={(e)=>setPhoneN(e.target.value)}/>
                        <label>Numer telefonu</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <textarea  value={message}onChange={(e)=>setMessage(e.target.value)}required></textarea>
                        <label>Wiadomość</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="btn-lrg submit-btn" value={message}onChange={(e)=>setMessage(e.target.value)}> Wyślij wiadomość</div>
                </div>
            </div>
        </div>
    )
}
export default Contact

