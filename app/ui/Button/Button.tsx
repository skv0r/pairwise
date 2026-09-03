import React, { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    type = "button",
    ...props
}) => {
    return (
        <button
            className={className ? `${styles.button} ${className}` : styles.button}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
