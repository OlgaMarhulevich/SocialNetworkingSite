import React from "react";
import Header from "./Header";
import {AuthDataType, axiosInstance, statuses} from "../../entities/entities";
import {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setFetching, setStatus} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

type HeaderProps = {
    setAuthUserData: (id: number, email: string, login: string) => void
    setFetching: (fetching: boolean) => void
    setStatus: (status: string) => void
    status: string
    isFetching: boolean
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderProps, any> {

    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.IN_PROGRESS)
            this.props.setFetching(false)
            axiosInstance.get('auth/me', {withCredentials: true})
                .then((response: AxiosResponse<AuthDataType>) => {
                    this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)
                    this.props.setStatus(statuses.SUCCESS)
                    this.props.setFetching(true)
                })
        }
    }

    render() {
        return <>
                <Header login={this.props.login} isAuth={this.props.isAuth}/>
        </>
    }
}

export default connect((state: StateType) => ({
    status: state.auth.status,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
}), {
    setAuthUserData,
    setFetching,
    setStatus,
})(HeaderContainer)