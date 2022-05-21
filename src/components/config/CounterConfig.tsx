import React from 'react';
import m from '../counter/CounterContainer.module.css';
import {Button} from '../counter/Button';
import {Options} from './Options';
import {useDispatch, useSelector} from 'react-redux';
import {
    setConfigDisableAC,
    setCounterValueAC,
    setDisabledIncAC, setDisabledResetAC,
    setMaxValueAC,
    setMinValueAC
} from '../../store/counter-reducer';
import {AppStateType} from '../../store/store';

type CounterConfigProps = {

}

export const CounterConfig: React.FC<CounterConfigProps> = () => {

    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    let configDisable = useSelector<AppStateType, boolean>(state => state.counter.configDisable)
    const dispatch = useDispatch();


    const setButtonHandler = () => {
        dispatch(setConfigDisableAC(true))
        dispatch(setDisabledIncAC(false))
        dispatch(setDisabledResetAC(true))
        dispatch(setCounterValueAC(minValue))
    }

    const changingStateMax = (value: number) => {
        if (value > 0 && value > minValue) {
            dispatch(setConfigDisableAC(false))
        } else {
            dispatch(setConfigDisableAC(true))
        }
        dispatch(setMaxValueAC(value))
    }

    const changingStateMin = (value: number) => {
        if (value >= 0 && value < maxValue) {
            dispatch(setConfigDisableAC(false))
        } else {
            dispatch(setConfigDisableAC(true))
        }
        dispatch(setMinValueAC(value))
    }

    return (
        <div className={m.box}>
            <div className={m.title}><h3>Settings</h3></div>
            <Options
                maxValue={maxValue}
                minValue={minValue}
                callbackMax={changingStateMax}
                callbackMin={changingStateMin}
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
