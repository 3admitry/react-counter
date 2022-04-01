import React, {ChangeEvent} from 'react';
import m from './Options.module.css';

type optionsProps = {
    maxValue: number
    startValue: number
    callbackMax: (n: number) => void
    callbackStart: (n: number) => void
}

export const Options: React.FC<optionsProps> = ({
                                                    maxValue,
                                                    startValue,
                                                    callbackMax,
                                                    callbackStart
                                                }) => {

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callbackMax(JSON.parse(e.currentTarget.value))
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callbackStart(JSON.parse(e.currentTarget.value))
    }

    return (
        <div className={m.OptionsBox}>
            <div>
                <label className={(maxValue < 0 || maxValue <= startValue) ? m.warning : ''}>max value: <input
                    type="number"
                    value={maxValue}
                    onChange={maxValueHandler}
                /></label>
            </div>
            <div>
                <label className={(startValue < 0 || maxValue <= startValue) ? m.warning : ''}>start value: <input
                    type="number"
                    value={startValue}
                    onChange={startValueHandler}
                /></label>
            </div>
        </div>
    );
};
