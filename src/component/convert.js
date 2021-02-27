import React from 'react';

export default function Convert(props) {
  const { 
    currencyOption, 
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props;
  
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
      <select className="options" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOption.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}

      </select>
    </div>
  )
}