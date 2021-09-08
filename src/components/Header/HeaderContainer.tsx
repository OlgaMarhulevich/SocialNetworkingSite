import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type HeaderProps = {
    setAuthUserData: (id: number, email: string, login: string) => void
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderProps, any> {

    componentDidMount() {
        authAPI.getAuth().then((data) => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data.id,
                        data.data.email, data.data.login)
                }
            })
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
})(HeaderContainer)