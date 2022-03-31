import React, {useEffect} from 'react';
import {Counter} from './Counter';
import {Button} from './Button';
import m from './CounterContainer.module.css'

type CounterContanierProps = {
    counter: number,
    setCounter: (val: number) => void,
    disabledReset: boolean,
    disabledInc: boolean
}

export const CounterContanier: React.FC<CounterContanierProps> = ({
                                                                      counter,
                                                                      setCounter,
                                                                      disabledReset,
                                                                      disabledInc
                                                                  }) => {


    const increaseCounter = () => {
        if (counter < 5) {
            setCounter(++counter);
        }
    }
    const resetCounter = () => {
        disabledReset = true;
        setCounter(0);
    }

    return (
        <div className={m.box}>
            <Counter counter={counter}/>
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

