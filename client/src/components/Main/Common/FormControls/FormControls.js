import React from "react";
import style from './FormControls.module.css';

// Вытаскиваем из props input и meta.
export const FormControl = ({input, meta, children}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            {children}
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={style.input + ' ' + (hasError ? style.error : '')}>
//             <input {...input} {...props} />
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     );
// }

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
