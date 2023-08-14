import React, { useState } from 'react';

type InputProps = {
    name: string;
    onChange?: (name: any, val: any) => void;
    min: number;
    max: number;
    defaultValue?: number;
    className?: string;
    step: number;
    id: string;
}

const SliderInput = ({ name, onChange, min, max, defaultValue = 0, className, step, id }: InputProps) => {
    const [value, setValue] = useState(defaultValue);
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value, 10));
        if (onChange) {
            onChange(name, e.target.value);
        }
    }
    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(value * 100) / max}% 100%`,
        };
    }
    return (
        <input
            id={id}
            name={name}
            type="range"
            className={className}
            value={value}
            onChange={onValueChange}
            min={min}
            max={max}
            step={step}
            style={getBackgroundSize()}
        />
    );
};

export default SliderInput;