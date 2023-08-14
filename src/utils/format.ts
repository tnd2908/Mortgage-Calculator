export const formartCurrency = (value: number) => {
    return new Intl.NumberFormat( 'en-us', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(value);
}