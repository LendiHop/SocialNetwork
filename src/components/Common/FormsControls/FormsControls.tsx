import React from "react";
import s from './FormsControls.module.css';
import {WrappedFieldProps} from "redux-form";

//&& FormNameProps (children)

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...restProps} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...restProps} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}