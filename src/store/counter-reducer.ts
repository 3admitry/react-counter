import {
    ACTION,
    counterReducerType, setConfigDisableType,
    setCounterType, setDisabledIncType,
    setDisabledResetType,
    setMaxValueType,
    setStartValueType
} from './actions'


const initialState = {
    value: 0,
    minValue: 0,
    maxValue: 10,
    configDisable: true,
    disabledReset: true,
    disabledInc: false,
}

export type initialStateType = {
    value: number
    minValue: number
    maxValue: number
    configDisable: boolean
    disabledReset: boolean
    disabledInc: boolean
}


export const counterReducer = (state:initialStateType=initialState, action:counterReducerType):initialStateType => {
    switch (action.type) {
        case ACTION.SET_COUNTER_VALUE:
            return {
                ...state,
                value: action.counterValue
            }
        case ACTION.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }
        case ACTION.SET_MIN_VALUE:
            return {
                ...state,
                minValue: action.minValue
            }
        case ACTION.SET_CONFIG_DISABLE:
            return {
                ...state,
                configDisable: action.configDisable

            }
        case ACTION.SET_DISABLED_RESET:
            return {
                ...state,
                disabledReset: action.disabledReset
            }
        case ACTION.SET_DISABLED_INC:
            return {
                ...state,
                disabledInc: action.disabledInc
            }
        default:
            return state;
    }
}


export const setCounterValueAC = (counterValue:number):setCounterType => ({type: ACTION.SET_COUNTER_VALUE, counterValue})
export const setMaxValueAC = (maxValue:number):setMaxValueType => ({type: ACTION.SET_MAX_VALUE, maxValue})
export const setMinValueAC = (minValue:number):setStartValueType => ({type: ACTION.SET_MIN_VALUE, minValue})
export const setConfigDisableAC = (configDisable:boolean):setConfigDisableType => ({type: ACTION.SET_CONFIG_DISABLE, configDisable})
export const setDisabledResetAC = (disabledReset:boolean):setDisabledResetType => ({type: ACTION.SET_DISABLED_RESET, disabledReset})
export const setDisabledIncAC = (disabledInc:boolean):setDisabledIncType => ({type: ACTION.SET_DISABLED_INC, disabledInc})