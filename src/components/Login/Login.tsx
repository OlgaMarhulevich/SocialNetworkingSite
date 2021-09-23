import React from 'react';
import { connect } from 'react-redux';
import {FormLoginDataType, LoginReduxForm} from "./LoginForm";
import {login, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router";
import s from './Login.module.css'

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormLoginDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={s.loginPage}>
            <h1>LOGIN PAGE</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default connect((state: AppStateType) => ({isAuth: state.auth.isAuth}), {login, logout}) (Login)


