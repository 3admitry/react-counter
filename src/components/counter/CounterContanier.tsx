import React, {useEffect} from 'react';
import {Counter} from './Counter';
import {Button} from './Button';
import m from './CounterContainer.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {setCounterValueAC, setDisabledIncAC, setDisabledResetAC} from '../../store/counter-reducer';
import {AppStateType} from '../../store/store';

export const CounterContanier = () => {

    let counter: number = useSelector<AppStateType, number>(state => state.counter.value)
    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    let configDisable = useSelector<AppStateType, boolean>(state => state.counter.configDisable)
    let disabledReset = useSelector<AppStateType, boolean>(state => state.counter.disabledReset)
    let disabledInc = useSelector<AppStateType, boolean>(state => state.counter.disabledInc)
    const dispatch = useDispatch();

    useEffect(() => {
        if (counter > minValue) {
            dispatch(setDisabledResetAC(false))
        }
    }, [counter])


    const increaseCounter = () => {
        if (counter < maxValue) {
            dispatch(setCounterValueAC(++counter))
        }
    }
    const resetCounter = () => {
        dispatch(setDisabledResetAC(true))
        dispatch(setDisabledIncAC(false))
        dispatch(setCounterValueAC(minValue))
    }

    return (
        <div className={m.box}>
            <div className={m.title}><h3>Counter</h3></div>
            <Counter configDisable={configDisable}
                     maxValue={maxValue}
                     minValue={minValue}
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

