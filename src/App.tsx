import React from 'react';
import './App.css';
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {LoginContainer} from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {RootStateType} from "./redux/store";
import {Preloader} from "./components/Common/Preloader/Preloader";

type AppPropsType = {
    initialized: boolean
    initializeApp: () => void
}

export class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (

            <div className="appWrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized
});

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initializeApp
    })
)(App);