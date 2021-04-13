import React, { Component } from "react";
import './style.css';
class login extends Component {
    constructor() {
        super();

        this.state = {
            UserName: '',
            Email: '',
            Password: '',
        }

        this.UserName = this.UserName.bind(this);
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);

    }
    UserName(event) {
        this.setState({ UserName: event.target.value })
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    render() {
        return (
            <div class="signupSection">
                <div class="info">
                    <h2>Masz już konto?</h2>
                    <n />
                    <p>Zaloguj się i do dzieła!</p>
                </div>
               
                <form action="#" method="POST" name="signupform" class="signupForm">

                    <ul class="noBullet">
                    <h2> Logowanie za pomocą konta</h2>
                        <li>
                            <label for="email"></label>
                            <input class="Fields" onChange={this.Email} type="e-mail" placeholder="Adres e-mail" pattern="[A-Za-z0-9-.,]{2,}@[A-Za-z0-9-]{2,}[.]{1}[a-zA-Z]{2,}" title="Podaj swój adres email" required />
                        </li>
                        <li>
                            <label for="password"></label>
                            <input class="Fields" onChange={this.Password} type="password" id="password" placeholder="Hasło" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                title="Hasło musi zawierać małą jak i duzą litere,znak specjalny oraz zawierać minimum 8 znaków" required />
                        </li>
                        <li>
                            <a href=""> Zapomniałeś hasła?</a>
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-bt" name="join" alt="Join" value="Zaloguj" />
                        </li>
                    
                    <h3> Albo....</h3>
                      
                        <a class="googleBtn" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> <b>Zaloguj się z Google</b></a><br /><br />
                    </ul>
                </form>
                
               
            </div>
        )
    }
}
export default login;
