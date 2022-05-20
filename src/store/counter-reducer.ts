import {loadState} from '../utils/utils';

const enum ACTION {
    SET_COUNTER_VALUE= 'SET_COUNTER_VALUE',
}

const initialState = {
    value: 0,
    startValue: loadState('startValue') || 0,
    maxValue: loadState('maxValue') || 10,
    configDisable: true,
    disabledReset: undefined,
    disabledInc: undefined,
}
export type initialStateType = typeof initialState;

type setCounterType = {
    type: ACTION.SET_COUNTER_VALUE
    counterValue: number
}
type counterReducerType = setCounterType

export const counterReducer = (state:initialStateType=initialState, action:counterReducerType):initialStateType => {
    switch (action.type) {
        case ACTION.SET_COUNTER_VALUE:
            return {
                ...state,
                value: action.counterValue
            }
        default:
            return state;
    }
}

export const setCounterValueAC = (counterValue:number):setCounterType => ({type: ACTION.SET_COUNTER_VALUE, counterValue})
