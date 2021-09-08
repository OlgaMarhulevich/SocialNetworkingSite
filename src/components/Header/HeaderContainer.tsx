import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type HeaderProps = {
    setAuthUserData: (id: number, email: string, login: string) => void
    login: string
    isAuth: boolean
    auth: () => void
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

export default connect((state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
}), {
    setAuthUserData,
    auth,
})(HeaderContainer)