import React, { useState } from 'react';
import './styles/login.css';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions/user.actions';
import { useNavigate } from 'react-router-dom';
import LogIn from '../components/login/LogIn';
import Register from '../components/login/Register';

function Login() {

  const [type, setType]= useState('logIn');
  const [user, setUser]= useState(null);
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handleForm=()=>{
    if(type === 'logIn') setType('register');
    else setType('logIn');
  }

  const signIn=()=>{
    // firebaseClient.googlAuth()
    // .then((result)=>{
    //     console.log(result.user);
    //     dispatch(getUser(result.user))
    //     navigate('/');
    // })
    // .catch((error)=>{
    //     alert(error.message);
    // })
  }
  return (
    <div className="login">
       <div className="login_content">
        <div className="login_logo">
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/'+
            'c/ce/Creative-Tail-xray2.svg/1200px-Creative-Tail-xray2.svg.png'} />
            <h2>Deuil pour tous</h2>
            {type === 'logIn' ? <LogIn/> : <Register/>}
            <button onClick={handleForm}>
              {type === 'logIn' ? 'Créer un compte' : 'Connexion'}
            </button>
        </div>
        
        
        {/* <Button type="submit" onClick={signIn}>
            connexion
        </Button> */}
        </div>
    </div>
  )
}

export default Login