import React from 'react';
import './style.css';
import Avatar from '../../media/avatar.jpg';
const Profile = () => {
    return (
        <div>
            <div class="container">
    <div class="view-account">
        <section class="module">
            <div class="module-inner">
                <div class="side-bar">
                    <div class="user-info">


                    <img src="{Avatar}" alt=""/>



                        <ul class="meta list list-unstyled">
                            <li class="name">JanKowalski1
                            </li>
                            <li class="email"><a href="#">jankowalski@gmail.com</a></li>
                        </ul>
                    </div>
            		      <nav class="side-menu">
        				      <ul class="nav">
        					     <li class="active"><a href="#"><span class="fa fa-user"></span> Profil</a></li>
        					     <li><a href="#zakupy"><span class="fa fa-credit-card"></span> Zakupy</a></li>
        				      </ul>
        			     </nav>
                </div>
                <div class="content-panel">
                    <h2 class="title">Profil użytkownika</h2>
                    <form class="form-horizontal">
                        <fieldset class="fieldset">
                            <h3 class="fieldset-title">Informacje</h3>
                            <div class="form-group avatar">
                                <figure class="figure col-md-2 col-sm-3 col-xs-12">
                                <img src="{Avatar}" alt=""/>
                                </figure>
                                <div class="form-inline col-md-10 col-sm-9 col-xs-12">
                                    <input type="file" class="file-uploader pull-left"/>
                                    <button type="submit" class="btn btn-sm btn-default-alt pull-left">Zaktualizuj avatar</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 col-sm-3 col-xs-12 control-label">Nick</label>
                                <div class="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" class="form-control" value="JanKowalski1"/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-2 col-sm-3 col-xs-12 control-label">Imie</label>
                                <div class="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" class="form-control" value="Jan"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 col-sm-3 col-xs-12 control-label">Nazwisko</label>
                                <div class="col-md-10 col-sm-9 col-xs-12">
                                    <input type="text" class="form-control" value="Kowalski"/>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="fieldset">
                            <h3 class="fieldset-title">Informacje kontaktowe</h3>
                            <div class="form-group">
                                <label class="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
                                <div class="col-md-10 col-sm-9 col-xs-12">
                                    <input type="email" class="form-control" value="jankowalski@gmail.com"/>
                                </div>
                            </div>
                        </fieldset>
                        <div class="form-group">
                            <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                <input class="btn btn-primary" type="submit" value="Zmień hasło"/>
                                <br/>
                                <br/>
                                <input class="btn btn-primary" type="submit" value="Zaktualizuj profil"/>
                            </div>
                        </div>
                    </form>
                    <br/><br/>
                    <div id="historia">
                        <h2 class="title">Historia zakupow</h2>
                      </div>
                </div>
            </div>
        </section>
    </div>
</div>
        </div>
    )
}

export default Profile
