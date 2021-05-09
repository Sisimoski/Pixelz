import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import { signInWithGoogle, auth } from '../../lib/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [number, setNumber] = useState('fail');
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault()
        console.log("fst", number);
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
            alert("Błąd danych logowania!");
            return setNumber("fail");
        });
        console.log("2", number);
        setNumber("noFail");
        console.log("3", number);
        if (number != "fail") {
            console.log("xd")
            alert("Zalogowano pomyślnie!")
            window.location = '/profile';
        }


    };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

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
                        <input class="Fields" name="userEmail" value={email} type="email" onChange={(event) => onChangeHandler(event)} id="userEmail" placeholder="Adres e-mail"
                            pattern="[A-Za-z0-9-.,]{2,}@[A-Za-z0-9-]{2,}[.]{1}[a-zA-Z]{2,}" title="Podaj swój adres email" required />
                    </li>
                    <li>
                        <label for="password"></label>
                        <input class="Fields" onChange={(event) => onChangeHandler(event)} name="userPassword" value={password} type="password" id="password" placeholder="Hasło"
                            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                            title="Hasło musi zawierać małą jak i duzą litere,znak specjalny oraz zawierać minimum 8 znaków" required />
                    </li>
                    <li>
                        <Link to="register" className="text-blue-500 hover:text-blue-600">
                            Nie masz konta? Zarejestruj się!
          </Link>
                    </li>
                    <li id="center-btn">
                        <input type="submit" id="join-bt" name="join" alt="Join" value="Zaloguj" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }} />
                    </li>


                    <h3> Albo....</h3>
                    <br />
                    <a class="googleBtn" href="#" onClick={signInWithGoogle} ><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> <b>Zaloguj się z Google</b></a><br /><br />
                </ul>
            </form>


        </div>
    )
}

export default Login;