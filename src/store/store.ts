import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState} from '../utils/utils';

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store;

// @ts-ignore
window.store = store;



