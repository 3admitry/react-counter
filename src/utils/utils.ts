import {AppStateType} from '../store/store';

// localStorage.js
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


// localStorage.js
export const saveState = (state:AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter-state', serializedState);
    } catch {
        // ignore write errors
    }
};

