import React, {ChangeEvent} from 'react';
import m from './Options.module.css';

type optionsProps = {
    maxValue: number
    minValue: number
    callbackMax: (n: number) => void
    callbackMin: (n: number) => void
}

export const Options: React.FC<optionsProps> = ({
                                                    maxValue,
                                                    minValue,
                                                    callbackMax,
                                                    callbackMin
                                                }) => {


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callbackMax(JSON.parse(e.currentTarget.value));
    }
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callbackMin(JSON.parse(e.currentTarget.value));
    }

    return (
        <div className={m.OptionsBox}>
            <div>
                <label className={(maxValue < 0 || maxValue <= minValue) ? m.warning : ''}>max value: <input
                    type="number"
                    value={maxValue}
                    onChange={maxValueHandler}
                /></label>
            </div>
            <div>
                <label className={(minValue < 0 || maxValue <= minValue) ? m.warning : ''}>min value: <input
                    type="number"
                    value={minValue}
                    onChange={minValueHandler}
                /></label>
            </div>
        </div>
    );
};
