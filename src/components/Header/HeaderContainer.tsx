import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redux/reducers/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {getIsAuth, getLogin} from "../../redux/selectors";

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
    isAuth: getIsAuth(state),
    login: getLogin(state),
}), {
    setAuthUserData,
    logout
})(HeaderContainer)