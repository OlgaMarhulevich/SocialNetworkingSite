import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type HeaderProps = {
    setAuthUserData: (id: (number|null), email: (string|null), login: (string|null), isAuth: boolean) => void
    login: string | null
    isAuth: boolean
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderProps> {
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
    logout
})(HeaderContainer)