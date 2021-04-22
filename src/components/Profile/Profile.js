import React from 'react';
import './style.css';
import Avatar from '../../media/avatar1.png';



const Profile = () => {
  return (

    <div>
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
                    <h5>jankowalski1@poczta.pl</h5>
                    <h5>JanKowalski1</h5>
                  </fieldset>
                  <br /><br />
                  <fieldset class="fieldset">
                    <h5>Jan</h5>
                    <h5>Kowalski</h5>
                    <h5>Malopolska 22</h5>
                    <h5>45-301</h5>
                    <h5>Opole</h5>
                    <h5>789 456 123</h5>
                  </fieldset>
                  <br /><br />

                  <div class="form-group">
                    <input class="btn btn-primary" type="submit" value="Zaktualizuj profil" />
                  </div>
                  <br /><br />
                </div>
              </div>
            </div>

            <div id="rightbox">
              <h3>Historia zakupów</h3>
              <div class="history">

              </div>

            </div>
          </section>
          <br /><br />
        </div>
      </div>
    </div>
  )
}

export default Profile
