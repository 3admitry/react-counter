import React, {useEffect} from 'react';
import m from './App.module.css'
import {CounterContanier} from './components/counter/CounterContanier';
import {CounterConfig} from './components/config/CounterConfig';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './store/store';
import {setDisabledIncAC} from './store/counter-reducer';

function App() {

    let counter = useSelector<AppStateType, number>(state => state.counter.value)
    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    let configDisable = useSelector<AppStateType, boolean>(state => state.counter.configDisable)

    let dispatch = useDispatch();

    useEffect(() => {
        if (counter === maxValue || !configDisable || maxValue <= minValue) {
            dispatch(setDisabledIncAC(true))
        }
    }, [counter, configDisable, maxValue, minValue])

    return (
        <div className={m.App}>
            <header className={m.header}>
                <CounterConfig/>
                <CounterContanier/>
            </header>
            <div style={{}}>
                powered by React/Redux
            </div>
        </div>
    );
}

export default App;
