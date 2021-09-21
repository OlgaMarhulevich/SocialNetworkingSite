import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";

const Login = () => {

    const onSubmit = (formData: FormDataType) => {
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

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) =>  {
    console.log('rerender login')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

