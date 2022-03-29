import React, {useState} from 'react';
import './App.module.css';
import {Counter} from './components/Counter';
import {Button} from './components/Button';
import m from './App.module.css'

function App() {
    let [counter, setCounter] = useState<number>(0);
    let disabledReset;
    let disabledInc;

    const increaseCounter = () => {
        if (counter < 5) {
            setCounter(++counter);
        }
    }
    const resetCounter = () => {
        disabledReset = true;
        setCounter(0);
    }

    if (counter === 5) {
        disabledInc = true
    }
    if (counter > 0) {
        disabledReset = false
    }

    return (
        <div className={m.App}>
            <header className={m.header}>
                <div className={m.box}>
                    <Counter counter={counter}/>
                    <div className={m.buttons}>
                        <Button title={'inc'}
                                callback={increaseCounter}
                                disabled={disabledInc !== undefined ? disabledInc : false}
                        />
                        <Button title={'reset'}
                                callback={resetCounter}
                                disabled={disabledReset !== undefined ? disabledReset : true}
                        />
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;
