import React, { Component } from "react";
import './style.css';
class register extends Component {
    constructor() {
        super();

        this.state = {
            Email: '',
            Password: '',
            Nick: '',
            Name: '',
            Surname: '',
            Street: '',
            PostalCode: '',
            Town:'',
            Phone:''
        }

        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.Nick = this.Nick.bind(this);
        this.Name = this.Name.bind(this);
        this.Surname = this.Surname.bind(this);
        this.Street = this.Street.bind(this);
        this.PostalCode = this.PostalCode.bind(this);
        this.Town = this.Town.bind(this);
        this.Phone = this.Phone.bind(this);

    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    Nick(event) {
        this.setState({ Nick: event.target.value })
    }
    Name(event) {
        this.setState({ Name: event.target.value })
    }
    Surname(event) {
        this.setState({ Surname: event.target.value })
    }
    Street(event) {
        this.setState({ Street: event.target.value })
    }
    PostalCode(event) {
        this.setState({ PostalCode: event.target.value })
    }
   Town(event) {
        this.setState({ Town: event.target.value })
    }
    Phone(event) {
        this.setState({ Phone: event.target.value })
    }
    

    render() {

    return (
        <>
   
        
        <div class="box">
        <div class="kol1"></div>
        <div class="kol2">
            <h2> Przyspiesz proces łącząc swoje konto z naszym serwisem</h2><br></br>
            <form action="#" method="POST" name="signOption">
                <input type="button" value="Google"/>
                <input type="button" value="Facebook"/><br></br><br></br><br></br>
            </form>

            <form action="#" method="POST"  name="signdata">
            <n />
            <h2>Dane konta</h2>
        
                <li>
                    <label for="email"></label>
                    <input class="inputFields" onChange={this.Email} type="e-mail" placeholder="Adres e-mail" pattern="[A-Za-z0-9-.,]{2,}@[A-Za-z0-9-]{2,}[.]{1}[a-zA-Z]{2,}" title="Podaj swój adres email" required />
                </li>
                <li>
                    <label for="password"></label>
                    <input class="inputFields" onChange={this.Password} type="password" id="password" placeholder="Hasło" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title="Hasło musi zawierać małą jak i duzą litere,znak specjalny oraz zawierać minimum 8 znaków" required />
                </li>
                <li>
                    <label for="nick"></label>
                    <input class="inputFields" onChange={this.Nick} type="text" id="nick" placeholder="Nick" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required />
                </li>
      
        <br></br>
        <h2>Dane kontaktowe</h2>

                <li>
                    <label for="name"></label>
                    <input class="inputFields" onChange={this.Name} type="text" placeholder="Imie" pattern="[A-Za-z]{1,32}" title="Podaj swoje imie" required />
                </li>
                <li>
                    <label for="surname"></label>
                    <input class="inputFields" onChange={this.Surname} type="text" id="surname" placeholder="Nazwisko" pattern="[A-Za-z]{1,32}" required />
                </li>
                <li>
                    <label for="street"></label>
                    <input class="inputFields" onChange={this.Street} type="text" id="street" placeholder="Ulica i numer" required />
                </li>
                <li>
                    <label for="postalCode"></label>
                    <input class="inputFields" onChange={this.PostalCode} type="text" id="PostalCode" placeholder="Kod pocztowy" pattern="[0-9]{2}\-[0-9]{3}" required />
                </li>
                <li>
                    <label for="Town"></label>
                    <input class="inputFields" onChange={this.Town} type="text" id="Town" placeholder="Miejscowość" pattern="[A-Za-z] {1,32}" required />
                </li>
                <li>
                    <label for="Phone"></label>
                    <input class="inputFields" onChange={this.Phone} type="tel" id="Phone" placeholder="Numer telefonu" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required />
                </li>
                <li id="center-btn">
                     <input class="join-btn" type="submit" id="join-btn" name="join" alt="Join" value="Join"/>
                </li>
        </form>
        </div>
        <div class="kol3"></div>
    </div></>
        )
    }
}

export default register;
