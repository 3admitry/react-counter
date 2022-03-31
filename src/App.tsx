import React, {useEffect, useState} from 'react';
import m from './App.module.css'
import {CounterContanier} from './components/counter/CounterContanier';
import {CounterConfig} from './components/config/CounterConfig';
import {json} from 'stream/consumers';

function App() {
    let [counter, setCounter] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);


    useEffect(() => {
        let maxValueStorage = localStorage.getItem('maxValue');
        maxValueStorage && setMaxValue(JSON.parse(maxValueStorage));

        let startValueStorage = localStorage.getItem('startValue');
        startValueStorage && setStartValue(JSON.parse(startValueStorage));
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [maxValue, startValue])

    let disabledReset, disabledInc;

    if (counter === 5) {
        disabledInc = true
    }
    if (counter > 0) {
        disabledReset = false
    }

    return (
        <div className={m.App}>
            <header className={m.header}>
                <CounterConfig maxValue={maxValue}
                               startValue={startValue}
                               setMaxValue={setMaxValue}
                               setStartValue={setStartValue}
                />
                <CounterContanier counter={counter} setCounter={setCounter}
                                  disabledReset={disabledReset !== undefined ? disabledReset : true}
                                  disabledInc={disabledInc !== undefined ? disabledInc : false}
                />
            </header>
        </div>
    );
}

export default App;
