import React, {useEffect, useState} from 'react';
import m from './App.module.css'
import {CounterContanier} from './components/counter/CounterContanier';
import {CounterConfig} from './components/config/CounterConfig';
import {useSelector, useDispatch} from 'react-redux';
import {AppStateType} from './store/store';
import {setCounterValueAC} from './store/counter-reducer';

function App() {
    let [maxValue, setMaxValue] = useState<number>(9);
    let [startValue, setStartValue] = useState<number>(0);
    let [configDisable, setConfigDisable] = useState<boolean>(true);


    let counter: number = useSelector<AppStateType, number>(state => state.counter.value)


    let disabledReset, disabledInc;

    useEffect(() => {
        let maxValueStorage = localStorage.getItem('maxValue');
        maxValueStorage && setMaxValue(JSON.parse(maxValueStorage));

        let startValueStorage = localStorage.getItem('startValue');
        startValueStorage && setStartValue(JSON.parse(startValueStorage));
    }, [])


    if (counter === maxValue || !configDisable || maxValue <= startValue) {
        disabledInc = true;
    }
    if (counter > startValue) {
        disabledReset = false;
    }
    if (!configDisable) {
        disabledReset = true;
    }

    return (
        <div className={m.App}>
            <header className={m.header}>
                <CounterConfig maxValue={maxValue}
                               startValue={startValue}
                               setMaxValue={setMaxValue}
                               setStartValue={setStartValue}
                               configDisable={configDisable}
                               setConfigDisable={setConfigDisable}
                />
                <CounterContanier disabledReset={disabledReset !== undefined ? disabledReset : true}
                                  disabledInc={disabledInc !== undefined ? disabledInc : false}
                                  configDisable={configDisable}
                                  maxValue={maxValue}
                                  startValue={startValue}
                />
            </header>
        </div>
    );
}

export default App;
