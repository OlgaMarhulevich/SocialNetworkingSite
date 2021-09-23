import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, logout, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderProps = {
    setAuthUserData: (id: (number|null), email: (string|null), login: (string|null), isAuth: boolean) => void
    login: string | null
    isAuth: boolean
    auth: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderProps, any> {

    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

export default connect((state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
}), {
    setAuthUserData,
    auth,
    logout
})(HeaderContainer)