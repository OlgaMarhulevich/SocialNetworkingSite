import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/formsControls/FormsControls";
import s from "./MyPosts/MyPosts.module.css";

export type FormPostDataType = {
    newMessage: string
}
const maxLength200 = maxLengthCreator(200)
const minValue2 = minLengthCreator(2)

const PostForm: React.FC<InjectedFormProps<FormPostDataType>> = (props) =>  {    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Your message...'}
                   component={Textarea}
                   name={'newMessage'}
                   className={s.textarea}
                   validate={[required, maxLength200, minValue2]} />
        </div>
        <div className={s.buttons}>
            <button className={s.button}>Add post</button>
        </div>
    </form>
)
}

export const PostReduxForm = reduxForm<FormPostDataType>({form: 'post'})(PostForm);