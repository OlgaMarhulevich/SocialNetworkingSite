import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import s from './Login.module.css'

export type FormLoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength25 = maxLengthCreator(25)
const minLength6 = minLengthCreator(6)

const LoginForm: React.FC<InjectedFormProps<FormLoginDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field placeholder={'Login'}
                       component={Input}
                       name={'email'}
                       validate={[required, maxLength25, minLength6]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       type={'password'}
                       validate={[required, maxLength25, minLength6]}/>
            </div>
            <label className={s.rememberMe}>
                <Field type={'checkbox'}
                       component={Input}
                       name={'rememberMe'}/>
                Remember me </label>
            <div>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormLoginDataType>({form: 'login'})(LoginForm);