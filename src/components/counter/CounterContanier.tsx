import React from 'react';
import {Counter} from './Counter';
import {Button} from './Button';
import m from './CounterContainer.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setCounterValueAC} from '../../store/counter-reducer';
import {AppStateType} from '../../store/store';

type CounterContanierProps = {
    disabledReset: boolean
    disabledInc: boolean
    configDisable: boolean
    maxValue: number
    startValue: number
}

export const CounterContanier: React.FC<CounterContanierProps> = ({
                                                                      disabledReset,
                                                                      disabledInc,
                                                                      configDisable,
                                                                      maxValue,
                                                                      startValue
                                                                  }) => {

    let counter:number = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch();

    const increaseCounter = () => {
        if (counter < maxValue) {
            //setCounter(++counter);
            dispatch(setCounterValueAC(++counter))
        }
    }
    const resetCounter = () => {
        disabledReset = true;
        //setCounter(startValue);
        dispatch(setCounterValueAC(startValue))
    }

    return (
        <div className={m.box}>
            <div className={m.title}><h3>Counter</h3></div>
            <Counter configDisable={configDisable}
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

