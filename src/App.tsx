import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionTypes, RootStateType} from "./redux/store";

type AppProps = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className="appWrapperContent">
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}  newMessageText={props.state.messagesPage.newMessageText} dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
