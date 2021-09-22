import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./DialogsMessages/DialogsMessages.module.css";
import {required} from "../../utils/validators/validators";
import {Textarea} from "../../common/formsControls/FormsControls";

type FormDataType = {
    newMessage: string
}
const DialogForm: React.FC<InjectedFormProps<FormDataType>> = (props) =>  {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendBox}>
            <div>
                <Field placeholder={'Text your message...'}
                       component={Textarea}
                       name={'newMessage'}
                       className={s.textarea}
                       validate={[required]} />
            </div>
            <div>
                <button className={s.button}>Send</button>
            </div>
        </form>
    )
}

export const DialogReduxForm = reduxForm<FormDataType>({form: 'dialog'})(DialogForm);