import React from 'react';
import './App.css';
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
                    <Route path='/users' render={ () => <UsersContainer/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
