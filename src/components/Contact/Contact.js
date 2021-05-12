import React, {useState}  from 'react'
import "./style.css"
import { Container } from "@material-ui/core";
//tu
/*
function Contact() {
    return (
        <div class="contactContainer">
           
            <div class="row col-xs-12 col-sm-12">
                <h1>Skontaktuj się</h1>
            </div>
            <div class="row input-container">
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <input type="text" required />
                        <label>Imię</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" required />
                        <label>Adres email</label>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" >
                        <input type="text" required />
                        <label>Numer telefonu</label>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12">
                    <div class="styled-input wide">
                        <textarea required></textarea>
                        <label>Wiadomość</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="btn-lrg submit-btn">Wyślij wiadomość</div>
                </div>
            </div>
        </div>

    )
}
*/

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
        <div style={{maxWidth: '60%', display:'flex', flexDirection: 'column', alignItems:'center', margin: 'auto'}} className="mycard">
        <div className="contactContainer">
        <Container id="contact">

        </Container>
            <h2 align="center">Masz pytania? Skontaktuj się z nami!</h2>
            <input type="text" placeholder="email" value={email}onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Imie" value={name}onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Numer telefonu" value={phoneN}onChange={(e)=>setPhoneN(e.target.value)}/> 
            <textarea type="text" placeholder="Wiadomość" value={message}onChange={(e)=>setMessage(e.target.value)}/>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>PostData()}> Wyślij wiadomość </button>
        </div>
    </div>)
}
export default Contact

