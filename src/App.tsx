import React, {useEffect, useState} from 'react';
import m from './App.module.css'
import {CounterContanier} from './components/counter/CounterContanier';
import {CounterConfig} from './components/config/CounterConfig';

function App() {
    let [counter, setCounter] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);
    let [configDisable, setConfigDisable] = useState<boolean>(true);

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
    if(!configDisable){
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
                               setCounter={setCounter}
                />
                <CounterContanier counter={counter} setCounter={setCounter}
                                  disabledReset={disabledReset !== undefined ? disabledReset : true}
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
