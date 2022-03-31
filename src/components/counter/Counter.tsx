import React from 'react';
import m from './Counter.module.css'

type counterPropsType = {
    counter: number
}

export const Counter: React.FC<counterPropsType> = ({counter}) => {
    return (
        <>
            <div className={counter === 5 ? m.counter+' '+m.warning:m.counter}>{counter}</div>
        </>
    );
};
