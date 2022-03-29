import React from 'react';
import m from './Button.module.css'

type buttonProps = {
    title: string
    callback: () => void
    disabled: boolean
}

export const Button: React.FC<buttonProps> = ({title, callback, disabled}) => {

    const clickButtonHandler = () => {
        callback();
    }

    return (
        <>
            <button className={m.button} disabled={disabled} onClick={clickButtonHandler}>{title}</button>
        </>
    );
};
