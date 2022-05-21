import React from 'react';
import m from './Counter.module.css'
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/store';

type counterPropsType = {
    configDisable: boolean
    maxValue: number
    minValue: number
}


export const Counter: React.FC<counterPropsType> = ({
                                                        configDisable,
                                                        maxValue,
                                                        minValue
                                                    }) => {
    let counter:number = useSelector<AppStateType, number>(state => state.counter.value)
    let msg = 'Enter values and press \'set\'';
    let warningMsg = 'Incorrect value';

    const outputCounter = () => {
        if (maxValue < 0 || minValue < 0 || maxValue <= minValue) {
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
                className={counter === maxValue || (maxValue < 0 || minValue < 0) || maxValue <= minValue ? m.counter + ' ' + m.warning : m.counter}>
                {outputCounter()}
            </div>
        </>
    );
};
