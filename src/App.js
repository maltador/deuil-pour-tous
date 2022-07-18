import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Defunt from './pages/Defunt';
import Home from './pages/Home';
import { getUser } from './redux/actions/user.actions';
import Routers from './router';
import * as client from './utils/ClientApi';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {
  const dispatch= useDispatch();   
  const userData= useSelector((state)=> state.userReducer)
  const [openSnack, setOpenSnack]= useState(false);
  const handleClose=()=>{
    setOpenSnack(false)
  }

  useEffect(()=>{    
    if(userData.token) dispatch(getUser());
    else console.log('Erreur pas de Token!!')
  }, [userData.token])

  return (
    <div className="app">
      <Routers/>
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Vous avez perdu vos accès
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
