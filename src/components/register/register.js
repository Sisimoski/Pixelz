import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import reg from "../../media/reg.png";
import { auth, generateUserDocument } from "../../lib/firebase";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [names, setNames] = useState("");
    const [surname, setSurname] = useState("");
    const [street, setStreetName] = useState("");
    const [postCode, setPostCode] = useState("");
    const [cityName, setCityName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, { displayName, names, surname, street, postCode, cityName, phoneNumber });
            alert("Uzytkownik został utworzony");
        }
        catch (error) {
            setError('Error Signing up with email and password');
            alert("Wystąpił błąd!");
        }

        setEmail("");
        setPassword("");
        setDisplayName("");
        setNames("");
        setSurname("");
        setStreetName("");
        setPostCode("");
        setCityName("");
        setPhoneNumber("");
    };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        } else if (name === "names") {
            setNames(value);
        } else if (name === "surname") {
            setSurname(value);
        } else if (name === "street") {
            setStreetName(value);
        } else if (name === "postCode") {
            setPostCode(value);
        } else if (name === "cityName") {
            setCityName(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        }
    };

    return (

        <div class="box">
            <div class="kol1"></div>
            <div class="kol2">

                <form action="#" method="POST" name="signdata">
                    <n />
                    <img src={reg} width="150px" height="150px" />
                    <h2> Dane konta</h2>

                    <li>
                        <label for="email"></label>
                        <input class="inputFields" type="email" placeholder="Adres e-mail" name="userEmail" value={email} id="userEmail" onChange={event => onChangeHandler(event)}
                            pattern="[A-Za-z0-9-.,]{2,}@[A-Za-z0-9-]{2,}[.]{1}[a-zA-Z]{2,}" title="Podaj swój adres email" required />
                    </li>
                    <li>
                        <label for="password"></label>
                        <input class="inputFields" type="password" id="userPassword" placeholder="Hasło" name="userPassword" value={password} onChange={event => onChangeHandler(event)}
                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                            title="Hasło musi zawierać małą jak i duzą litere,znak specjalny oraz zawierać minimum 8 znaków" required />
                    </li>
                    <li>
                        <label for="nick"></label>
                        <input class="inputFields" type="text" id="displayName" placeholder="Nick" name="displayName" value={displayName} onChange={event => onChangeHandler(event)}
                            pattern="(?=^.{1,32}[A-Za-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]" required />
                    </li>

                    <br></br>
                    <h2> Dane kontaktowe</h2>

                    <li>
                        <label for="name"></label>
                        <input class="inputFields" type="text" placeholder="Imie" id="names" name="names" value={names} onChange={event => onChangeHandler(event)}
                            pattern="(?=^.{1,32}[A-Za-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]" title="Podaj swoje imie" required />
                    </li>
                    <li>
                        <label for="surname"></label>
                        <input class="inputFields" type="text" id="surname" placeholder="Nazwisko" name="surname" value={surname} onChange={event => onChangeHandler(event)}
                            pattern="(?=^.{1,32}[A-Za-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]" required />
                    </li>
                    <li>
                        <label for="street"></label>
                        <input class="inputFields" type="text" id="street" placeholder="Ulica i numer" name="street" value={street} onChange={event => onChangeHandler(event)}
                            pattern="(?=^.{1,32}[A-Za-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]" required />
                    </li>
                    <li>
                        <label for="postalCode"></label>
                        <input class="inputFields" type="text" id="postCode" placeholder="Kod pocztowy" name="postCode" value={postCode} onChange={event => onChangeHandler(event)}
                            pattern="[0-9]{2}\-[0-9]{3}" required />
                    </li>
                    <li>
                        <label for="Town"></label>
                        <input class="inputFields" type="text" id="cityName" placeholder="Miejscowość" name="cityName" value={cityName} onChange={event => onChangeHandler(event)}
                            pattern="(?=^.{1,32}[A-Za-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]" required />
                    </li>
                    <li>
                        <label for="Phone"></label>
                        <input class="inputFields" type="tel" id="phoneNumber" placeholder="Numer telefonu" name="phoneNumber" value={phoneNumber} onChange={event => onChangeHandler(event)}
                            pattern="[0-9]{9}" required />
                    </li>
                    <li id="center-btn">
                        <input class="join-btn" type="submit" id="join-btn" name="join" alt="Join" value="Join" onClick={event => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }} />
                    </li>
                </form>
            </div>

            <div class="kol3"></div>
        </div>
    )
}

export default Register;
