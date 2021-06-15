import React, { useContext, useState } from 'react';
import './style.css';
import Avatar from '../../media/avatar1.png';
import { UserContext } from '../../lib/UserProvider';
import Spinner from '../Spinner/Spinner';

const Profile = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const loading = () => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 5000);
    if (showSpinner) {
      return <Spinner />;
    }
  };
  const user = useContext(UserContext);

  console.log("user", user);
  if (user == null) return loading();
  const { displayName, email, cityName, names, phoneNumber, postCode, street, surname } = user;
  return (

    <div class="boxmain">
      <div class="container">
        <div class="view-account">
          <section class="module">
            <h2 class="module-title">Twoj profil</h2>
            <div class="avatar-box">
              <img class="avatar" src={Avatar} alt="" />
            </div>
            <div id="leftbox">
              <h3>Dane konta</h3>
              <div id="leftbox-module">
                <div id="left-leftbox">
                  <br />
                  <fieldset class="fieldset">
                    <h5 class="title">Adres e-mail</h5>
                    <h5 class="title">Nick</h5>
                  </fieldset>
                  <br /><br />
                  <fieldset class="fieldset">
                    <h5 class="title">Imie</h5>
                    <h5 class="title">Nazwisko</h5>
                    <h5 class="title">Ulica i nr</h5>
                    <h5 class="title">Kod pocztowy</h5>
                    <h5 class="title">Miejscowość</h5>
                    <h5 class="title">Numer telefonu</h5>
                  </fieldset>
                </div>
                <div id="middlebox">
                </div>
                <div id="right-leftbox">
                  <fieldset class="fieldset">
                    <br />
                    <h5>{email} </h5>
                    <h5>{displayName} </h5>
                  </fieldset>
                  <br /><br />
                  <fieldset class="fieldset">
                    <h5>{names} </h5>
                    <h5>{surname}</h5>
                    <h5>{street}</h5>
                    <h5>{postCode}</h5>
                    <h5>{cityName}</h5>
                    <h5>{phoneNumber}</h5>
                  </fieldset>
                  <br />
                  <br />
                  <div class="form-group">
                    <input class="buttonS" type="submit" value="Zmiana hasła" />
                  </div>
                  <br />
                  <br />
                </div>

              </div>
            </div>

            <div id="rightbox">
              <h3>Historia zakupów</h3>
              <div class="history">
              </div>
              <br /><br />
            </div>

          </section>
          <br /><br />
        </div>
      </div>
    </div>
  )
}

export default Profile
