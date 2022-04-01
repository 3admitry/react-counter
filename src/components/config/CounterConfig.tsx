import React from 'react';
import m from '../counter/CounterContainer.module.css';
import {Button} from '../counter/Button';
import {Options} from './Options';

type CounterConfigProps = {
    maxValue: number
    startValue: number
    setMaxValue: (v: number) => void
    setStartValue: (v: number) => void
    setConfigDisable: (v: boolean) => void
    configDisable: boolean
    setCounter: (n: number) => void
}

export const CounterConfig: React.FC<CounterConfigProps> = ({
                                                                maxValue,
                                                                startValue,
                                                                setMaxValue,
                                                                setStartValue,
                                                                setConfigDisable,
                                                                configDisable,
                                                                setCounter
                                                            }) => {


    const setButtonHandler = () => {
        setConfigDisable(true);
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
        setCounter(startValue);
    }

    const changingStateMax = (value: number) => {
        if (value > 0 && value > startValue) {
            setConfigDisable(false);
        } else {
            setConfigDisable(true);
        }
        setMaxValue(value);
    }

    const changingStateStart = (value: number) => {
        if (value >= 0 && value < maxValue) {
            setConfigDisable(false);
        } else {
            setConfigDisable(true);
        }
        setStartValue(value);
    }

    return (
        <div className={m.box}>
            <div className={m.title}><h3>Settings</h3></div>
            <Options
                maxValue={maxValue}
                startValue={startValue}
                callbackMax={changingStateMax}
                callbackStart={changingStateStart}
            />
            <div className={m.buttons}>
                <Button title={'set'}
                        callback={setButtonHandler}
                        disabled={configDisable}
                />
            </div>
        </div>
    );
};
