import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import styles from "./Input.module.css";


type InputVariant = "text" | "email" | "password" | "tel" | "date" | "checkbox";

interface InputFieldsProps extends ComponentPropsWithoutRef<"input"> {
    variant?: InputVariant,
    label?: string,
    maxWidth?: CSSProperties['maxWidth'];
    placeholder?: string,
}

const defaults: Record<InputVariant, { type: string; label: string; placeholder: string; hint?: string }> = {
    text:     { type: "text",     label: "Имя",     placeholder: "Введите текст..." },
    email:    { type: "email",    label: "Email",    placeholder: "name@example.com",    hint: "Используется для входа и уведомлений" },
    password: { type: "password", label: "Пароль",   placeholder: "Введите пароль...",    hint: "Не менее 8 символов" },
    tel:      { type: "tel",      label: "Телефон",  placeholder: "+7 (999) 000-00-00",  hint: "Формат: +7 (XXX) XXX-XX-XX" },
    date:     { type: "date",     label: "Дата",     placeholder: "" },
    checkbox: { type: "checkbox", label: "",          placeholder: "" },
};

const Input: React.FC<InputFieldsProps> = ({
    variant = "text",
    label,
    maxWidth = "300px",
    placeholder,
    className,
    ...props
}) => {
    const d = defaults[variant];
    const resolvedLabel = label ?? d.label;
    const resolvedPlaceholder = placeholder ?? d.placeholder;
    const hint = d.hint;
    const groupClass = className
        ? `${styles.input__group} ${className}`
        : styles.input__group;

    if (variant === "checkbox") {
        return (
            <div className={groupClass}
                style={{ width: maxWidth, maxWidth }}
            >
                <label className={styles.input__checkbox_row}>
                    <input
                        className={styles.input_checkbox}
                        type="checkbox"
                        id={variant}
                        {...props}
                    />
                    {resolvedLabel && (
                        <span className={styles.label_checkbox}>{resolvedLabel}</span>
                    )}
                </label>
            </div>
        );
    }

    const inputClass = hint
        ? `${styles.input} ${styles.input_with_hint}`
        : styles.input;

    return (
        <div className={groupClass}
            style={{ width: maxWidth, maxWidth }}
        >
            {resolvedLabel && (
                <label className={styles.label}
                    htmlFor={variant}
                >{resolvedLabel}</label>
            )}
            <div className={styles.input__wrapper}>
                <input
                    className={inputClass}
                    type={d.type}
                    id={variant}
                    placeholder={resolvedPlaceholder}
                    {...props}
                />
                {hint && (
                    <span className={styles.input__hint}>
                        <span className={styles.input__hint_icon}>?</span>
                        <span className={styles.input__hint_tooltip}>{hint}</span>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Input;