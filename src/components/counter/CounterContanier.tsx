import React from 'react';
import {Counter} from './Counter';
import {Button} from './Button';
import m from './CounterContainer.module.css'

type CounterContanierProps = {
    counter: number
    setCounter: (val: number) => void
    disabledReset: boolean
    disabledInc: boolean
    configDisable: boolean
    maxValue: number
    startValue: number
}

export const CounterContanier: React.FC<CounterContanierProps> = ({
                                                                      counter,
                                                                      setCounter,
                                                                      disabledReset,
                                                                      disabledInc,
                                                                      configDisable,
                                                                      maxValue,
                                                                      startValue
                                                                  }) => {


    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(++counter);
        }
    }
    const resetCounter = () => {
        disabledReset = true;
        setCounter(startValue);
    }

    return (
        <div className={m.box}>
            <div className={m.title}><h3>Counter</h3></div>
            <Counter counter={counter}
                     configDisable={configDisable}
                     maxValue={maxValue}
                     startValue={startValue}
            />
            <div className={m.buttons}>
                <Button title={'inc'}
                        callback={increaseCounter}
                        disabled={disabledInc}
                />
                <Button title={'reset'}
                        callback={resetCounter}
                        disabled={disabledReset}
                />
            </div>
        </div>
    );
}

