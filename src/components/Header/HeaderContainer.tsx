import React from 'react';
import {Header, HeaderPropsType} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderAPIContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        usersAPI.getAuth().then(data => {
                if(data.resultCode === 0) {
                    this.props.setAuthUserData(data.data);
                }
            });
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        data: state.auth.data,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData,
})(HeaderAPIContainer);