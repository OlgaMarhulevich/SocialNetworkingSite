import React from 'react';
import {FormLoginDataType, LoginReduxForm} from "./LoginForm";

const Login = () => {

    const onSubmit = (formData: FormLoginDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login


