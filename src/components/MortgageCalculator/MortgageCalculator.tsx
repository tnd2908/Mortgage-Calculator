import React, { useState } from 'react';
import SliderInput from '../SliderInput/SliderInput';
import { CalculatorKeys, calculatorFields, getTotalAmount } from '../../utils/calculator';
import { formartCurrency } from '../../utils/format';

export type LoanInputValue = {
    purchasePrice: number;
    downPayment: number;
    repaymentTime: number;
    interestRate: number;
}

const MortgageCalculator = () => {
    const initialValue : LoanInputValue = {
        purchasePrice: 0,
        downPayment: 0,
        repaymentTime: 0,
        interestRate: 0
    }
    calculatorFields.forEach(element => {
        initialValue[element.name] = element.defaultValue();
    });

    const [value, setValue] = useState(initialValue);
    const [amount, setAmount] = useState(getTotalAmount(initialValue));

    const onValueChange = (name: CalculatorKeys, val: any) => {
        const changedValue = {...value, [name]: val}
        setValue(changedValue);
        setAmount(getTotalAmount(changedValue));
    }

    return (
        <div className="bg-secondary py-[20px] lg:w-1/2 w-full">
            <div className='lg:max-w-[640px] w-full float-right p-8'>
                <h2 className='text-white text-[56px] leading-[70px] font-bold'>Mortgage Calculator</h2>
                <p className='max-w-[473px] opacity-80 text-white my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="flex flex-wrap">
                    {calculatorFields.map(field => (
                        <div key={field.name} className="md:w-1/2 w-full mb-6">
                            <label 
                                className='text-white mb-2 block font-extrabold' 
                                htmlFor={field.name}
                                >
                                    {field.label}: {field.format(value[field.name])}
                            </label>
                            <SliderInput
                                id={field.name}
                                className='w-4/5'
                                name={field.name}
                                min={field.min}
                                max={field.max}
                                defaultValue={value[field.name]}
                                step={field.step}
                                onChange={onValueChange}
                            />
                        </div>
                    ))}
                </div>
                <p className='text-white font-extrabold mt-8 mb-4'>
                    Loan amount: 
                    <span className='text-primary text-2xl ms-2'>{formartCurrency(amount * value['repaymentTime'])}</span>
                </p>
                <p className='text-white font-extrabold mb-4'>
                    Estimated repayment per year: 
                    <span className='text-primary text-2xl ms-2'>{formartCurrency(amount)}</span>
                </p>
                <p className='text-white font-extrabold'>
                    Estimated repayment per month: 
                    <span className='text-primary text-2xl ms-2'>{formartCurrency(amount/12)}</span>
                </p>
            </div>
        </div>
    );
};

export default MortgageCalculator;