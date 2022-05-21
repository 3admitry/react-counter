
export const enum ACTION {
    SET_COUNTER_VALUE= 'SET_COUNTER_VALUE',
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_MIN_VALUE = 'SET_MIN_VALUE',
    SET_CONFIG_DISABLE = 'SET_CONFIG_DISABLE',
    SET_DISABLED_RESET = 'SET_DISABLED_RESET',
    SET_DISABLED_INC = 'SET_DISABLED_INC',
}

export type setCounterType = {
    type: ACTION.SET_COUNTER_VALUE
    counterValue: number
}
export type setMaxValueType = {
    type: ACTION.SET_MAX_VALUE
    maxValue: number
}
export type setStartValueType = {
    type: ACTION.SET_MIN_VALUE
    minValue: number
}
export type setConfigDisableType = {
    type: ACTION.SET_CONFIG_DISABLE
    configDisable: boolean
}
export type setDisabledResetType = {
    type: ACTION.SET_DISABLED_RESET
    disabledReset: boolean
}
export type setDisabledIncType = {
    type: ACTION.SET_DISABLED_INC
    disabledInc: boolean
}
export type counterReducerType = setCounterType | setMaxValueType | setStartValueType | setConfigDisableType | setDisabledResetType | setDisabledIncType
