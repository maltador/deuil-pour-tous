import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
/*Components */
import Login from '../pages/Login';
import Home from '../pages/Home';
import Defunt from '../pages/Defunt';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NewDefunt from '../pages/NewDefunt';
import Cimetiere from '../pages/Cimetiere';
import ProfilUser from '../pages/ProfilUser';
import Profil from '../pages/Profil';

function index() {
    const Connected = () => {
        return (
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        )
    }
    return (
        <Router>
            <Routes>
                <Route path={'/login'} element={<Login/>} />
                <Route element={<Connected/>}>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/defunt/:defuntId'} element={<Defunt/>} />
                    <Route path={'/new-defunt'} element={<NewDefunt/>} />
                    <Route path={'/cimetiere'} element={<Cimetiere/>} />
                    <Route path={'/profil'}  element={<ProfilUser/>} />
                    <Route path={'/profil/:userId'} element={<Profil/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default index