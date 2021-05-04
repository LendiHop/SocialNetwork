import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppProps = {
    state: RootStateType
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className="appWrapperContent">
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} />}/>
                    <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
