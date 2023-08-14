import { LoanInputValue } from "../components/MortgageCalculator/MortgageCalculator";
import { MAX_DOWN_PAYMENT, MAX_PURCHASE_PRICE, MAX_REPAYMENT_TIME } from "../constant/constant";
import { formartCurrency } from "./format";

export type CalculatorKeys = 'purchasePrice' | 'downPayment' | 'repaymentTime' | 'interestRate';
export type CalculatorField = {
    name: CalculatorKeys,
    min: number,
    max: number,
    defaultValue: () => number,
    label: string,
    step: number,
    format: ((val: number) => string)
}
export const calculatorFields: CalculatorField[] = [
    {
        name: 'purchasePrice',
        min: 0,
        max: MAX_PURCHASE_PRICE,
        defaultValue: function () {
            return this.max / 2;
        },
        label: 'Purchase price',
        step: 1,
        format: (val: number) => formartCurrency(val)
    },
    {
        name: 'downPayment',
        min: 0,
        max: MAX_DOWN_PAYMENT,
        defaultValue: function () {
            return this.max / 2;
        },
        label: 'Down payment',
        step: 1,
        format: (val: number) => formartCurrency(val)
    },
    {
        name: 'repaymentTime',
        min: 1,
        max: MAX_REPAYMENT_TIME,
        defaultValue: function () {
            return 2;
        },
        label: 'Repayment time',
        step: 1,
        format: (val: number) => val + ' years'
    },
    {
        name: 'interestRate',
        min: 1,
        max: 100,
        defaultValue: function () {
            return 1;
        },
        label: 'Interest rate',
        step: 1,
        format: (val: number) => `${val}%`
    }
];

/* 
    Formula for mortgage payments: M = P[r(1+r)^n/((1+r)^n)-1)]
    
    a. M = the total monthly mortgage payment
    b. P = the principal loan amount(Purchase Price - Down Payment)
    c. r = your monthly interest rate
    d. n = number of payments over the loan’s lifetime.
*/

export const getTotalAmount = (value: LoanInputValue) => {
    const r = value['interestRate'] / 100;
    const n = value['repaymentTime'];
    const P = value['purchasePrice'] - value['downPayment'];
    const amountValue = P * (
        (r * Math.pow((1 + r), n)) /
        (Math.pow((1 + r), n) - 1)
    )
    return amountValue;
}