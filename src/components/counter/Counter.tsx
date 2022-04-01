import React from 'react';
import m from './Counter.module.css'

type counterPropsType = {
    counter: number
    configDisable: boolean
    maxValue: number
    startValue: number
}


export const Counter: React.FC<counterPropsType> = ({
                                                        counter,
                                                        configDisable,
                                                        maxValue,
                                                        startValue
                                                    }) => {
    let msg = 'Enter values and press \'set\'';
    let warningMsg = 'Incorrect value';

    const outputCounter = () => {
        if (maxValue < 0 || startValue < 0 || maxValue <= startValue) {
            return warningMsg;
        } else if (!configDisable) {
            return msg;
        } else {
            return counter;
        }
    }

    return (
        <>
            <div
                className={counter === maxValue || (maxValue < 0 || startValue < 0) || maxValue <= startValue ? m.counter + ' ' + m.warning : m.counter}>
                {outputCounter()}
            </div>
        </>
    );
};
