import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from "../../common/formsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

export type FormLoginDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength15 = maxLengthCreator(15)
const minLength6 = minLengthCreator(6)

const LoginForm: React.FC<InjectedFormProps<FormLoginDataType>> = (props) =>  {
    console.log('rerender login')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       component={Input}
                       name={'login'}
                       validate={[required, maxLength15, minLength6]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       validate={[required, maxLength15, minLength6]}/>
            </div>
            <div>
                <Field type={'checkbox'}
                       component={Input}
                       name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormLoginDataType>({form: 'login'})(LoginForm);