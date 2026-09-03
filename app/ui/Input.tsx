import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import styles from "./Input.module.css";

interface InputFieldsProps extends ComponentPropsWithoutRef<"input"> {
    label?: string,
    maxWidth?: CSSProperties['maxWidth'];
    placeholder?: string,
}

const Input : React.FC<InputFieldsProps> = ({
    label = "Ваше имя", 
    maxWidth = "300px",
    placeholder = "Введите текст...",
    ...props

    }
) => {
    return (
        <div className={styles.input__group} style={{ maxWidth }}>
            <label className={styles.label} htmlFor="name">{label}</label>
            <input 
                className={styles.input}
                type="text"
                id="name"
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default Input;