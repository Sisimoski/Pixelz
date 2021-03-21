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
                    <h2>Kupuj najlepsze gry w super cenach!</h2>
                    <n />
                    <p>Dołącz już teraz</p>
                </div>
                <form action="#" method="POST" class="signupForm" name="signupform">

                    <ul class="noBullet">
                        <li>
                            <label for="username"></label>
                            <input class="inputFields" onChange={this.UserName} type="text" placeholder="Login" pattern="[A-Za-z0-9-]{3,99}" title="Login musi miec przynajmniej 3 znaki" required />
                        </li>
                        <li>
                            <label for="email"></label>
                            <input class="inputFields" onChange={this.Email} type="e-mail" placeholder="Adres e-mail" pattern="[A-Za-z0-9-.,]{2,}@[A-Za-z0-9-]{2,}[.]{1}[a-zA-Z]{2,}" title="Podaj swój adres email" required />
                        </li>
                        <li>
                            <label for="password"></label>
                            <input class="inputFields" onChange={this.Password} type="password" id="password" placeholder="Hasło" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                                title="Hasło musi zawierać małą jak i duzą litere,znak specjalny oraz zawierać minimum 8 znaków" required />
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Join" />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}
export default login;
