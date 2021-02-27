import React, { useEffect, useState } from 'react';
import './App.css';
import Convert from './convert';

 import Popup from './component/pop-up/pop-up'; 
import Navbar from './component/navbar/navbar';


const BASE_URL = 'https://api.exchangeratesapi.io/latest';



function App() {

  const [currencyOption, setCurrencyOption] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency,setAmountInFromCurrency] = useState(true)

  let toAmount , fromAmount

  if(amountInFromCurrency){
    fromAmount = amount
    toAmount = amount * exchangeRate
  }else{
    toAmount = amount
    fromAmount = amount/exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[26]
        setCurrencyOption([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null ){
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  },[fromCurrency,toCurrency])

  function handleFromAmountChange(e){
   setAmount(e.target.value)
   setAmountInFromCurrency(true)
  }  

  function handleToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
   }  

  return (
    <>
      <Navbar/>
      <div className="App">
        <div className="card">
          <h1>Currency Converter</h1>
          <div className="container">
             <Popup/>
            <div className="row1">
              <h2>Currency i have: </h2>
              <Convert currencyOption={currencyOption}
                selectedCurrency={fromCurrency}
                onChangeCurrency = {e => setFromCurrency(e.target.value)}
                onChangeAmount = {handleFromAmountChange}
                amount = {fromAmount}
              />
            </div>
            <div className="equal">
              =
            </div>
            <div className="row2">
              <h2>Currency i want: </h2>
              <Convert currencyOption={currencyOption}
                selectedCurrency={toCurrency}
                onChangeCurrency = {e => setToCurrency(e.target.value)}
                onChangeAmount = {handleToAmountChange}
                amount = {toAmount}
              />
            </div>
          </div>
        </div>

      </div>
      <div />
    </>
  );
}

export default App;
