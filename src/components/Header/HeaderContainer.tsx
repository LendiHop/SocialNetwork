import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {getAuthUserData} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
}

class HeaderAPIContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData,
})(HeaderAPIContainer);