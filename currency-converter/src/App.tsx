import React, { useState, useEffect } from 'react';
import { Country_List } from './countries';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const CurrencyConverter = () => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('BRL');
  const [fromFlag, setFromFlag] = useState<string>('https://flagcdn.com/48x36/us.png');
  const [toFlag, setToFlag] = useState<string>('https://flagcdn.com/48x36/br.png');
  const [amount, setAmount] = useState<string>('1');
  const key = "21da04c3defe26f658ff5462";

  const fetchExchangeRate = async () => {
    if (fromCurrency && toCurrency) {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/${key}/latest/${fromCurrency}`);
      const rate = response.data.conversion_rates[toCurrency];
      setExchangeRate(rate);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency, toCurrency, amount]);

  const handleReverse = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromFlag(`https://flagcdn.com/48x36/${Country_List[toCurrency].toLowerCase()}.png`);
    setToFlag(`https://flagcdn.com/48x36/${Country_List[fromCurrency].toLowerCase()}.png`);
  };

  const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    setFromCurrency(newCurrency);
    setFromFlag(`https://flagcdn.com/48x36/${Country_List[newCurrency].toLowerCase()}.png`);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    setToCurrency(newCurrency);
    setToFlag(`https://flagcdn.com/48x36/${Country_List[newCurrency].toLowerCase()}.png`);
  };

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <form>
        <div className="amount">
          <p></p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="convert-box">
          <div className="from">
            <p>From</p>
            <div className="select-input">
              <img src={fromFlag} alt="From Currency" />
              <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                {Object.entries(Country_List).map(([code]) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="reverse">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={handleReverse}/>
          </div>
          <div className="to">
            <p>To</p>
            <div className="select-input">
              <img src={toFlag} alt="To Currency" />
              <select value={toCurrency} onChange={handleToCurrencyChange}>
                {Object.entries(Country_List).map(([code]) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="result">
          {exchangeRate !== null && amount
            ? `Converted Value: ${(parseFloat(amount) * exchangeRate).toFixed(2)}`
            : 'Insert a value'}
        </div>
      </form>
    </div>
  );
};

export default CurrencyConverter;
