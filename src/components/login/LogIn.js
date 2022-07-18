import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/LogIn.css';
import * as client from '../../utils/ClientApi';
import { useDispatch } from 'react-redux';
import { getUser, getToken } from '../../redux/actions/user.actions';


function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const email_err= document.querySelector('#email_err');
    const password_err= document.querySelector('#password_err');
    const general_err= document.querySelector('#general_err');
    const dispatch= useDispatch();

    const signIn = (e) => {
        e.preventDefault();
        client.doPost(client.login, {
            email,
            password
        },
        false)
        .then((res)=>{
            console.log(res);            
            if(res.data){
                console.log(res.data)
                dispatch(getToken(res.data));
                window.location= '/'; 
            }            
        })
        .catch(err=>{
            if(err.response.data){
                if(err.response.data.email) email_err.innerHTML= err.response.data.email;
                else email_err.innerHTML= '';
                if(err.response.data.password) password_err.innerHTML= err.response.data.password;
                else password_err.innerHTML= '';
                if(err.response.data.general) general_err.innerHTML= err.response.data.general;
            }            
            console.log(err);
        })
        
    }
    return (
        <div className="login_form">
            <h3>Se connecter</h3>
            <label id="email_err"></label>
            <div className="input_login">
                <input
                    id="email"
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <label id="password_err"></label>
            <div className="input_login">
                <input
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <label id="general_err"></label>
            <div className="input_login">
                <input onClick={signIn} type="submit" value="Connexion" />
            </div>
        </div>
    )
}

export default LogIn