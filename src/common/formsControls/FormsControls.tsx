import {WrappedFieldProps} from "redux-form";
import {FC} from "react";
import s from './FormsControls.module.css'

export const Textarea: FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const error = meta.error && meta.touched

    return (
        <div className={s.formControl + ' ' + (error ? s.error : '')}>
            {error && <span>{meta.error}</span>}
            <div>
                <textarea {...input} {...props}/>
            </div>
        </div>
    )
}
export const Input: FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const error = meta.error && meta.touched

    return (
        <div className={s.formControl + ' ' + (error ? s.error : '')}>
            {error && <span>{meta.error}</span>}
            <div>
                <input {...input} {...props}/>
            </div>
        </div>
    )
}