import React from 'react';
import m from '../counter/CounterContainer.module.css';
import {Button} from '../counter/Button';
import {Options} from './Options';

type CounterConfigProps ={
    maxValue: number
    startValue: number
    setMaxValue: (n:number)=>void
    setStartValue: (n:number)=>void
}

export const CounterConfig:React.FC<CounterConfigProps> = ({
                                                               maxValue,
                                                               startValue,
                                                               setMaxValue,
                                                               setStartValue
                                                           }) => {

    const setButtonHandler = () => {

    }
    const changingStateMax = (value:number) => setMaxValue(value);
    const changingStateStart = (value:number) => setStartValue(value);

    return (
        <div className={m.box}>
            <Options
                maxValue={maxValue}
                startValue={startValue}
                callbackMax={changingStateMax}
                callbackStart={changingStateStart}
            />
            <div className={m.buttons}>
                <Button title={'set'}
                        callback={setButtonHandler}
                        disabled={true}
                />
            </div>
        </div>
    );
};
