import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [material, setMaterial] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQuantity] = useState('');
  const [result, setResult] = useState('');

  const calculator = (e) => {
    e.preventDefault();
    setResult(price * qty);
    document.getElementById('display').style.display = 'block';
  };

  const clearResult = () => {
    setResult(0);
    setPrice(0);
    setQuantity(0);
    setMaterial('');
    document.getElementById('display').style.display = 'none';
  };

  const comma = (num) => {
    const price = parseInt(num);
    const newText = price.toLocaleString();
    return newText; 
  };

  return (
    <div className="main-container">
      <form action="">
        <div className="form-group">
          <label htmlFor="material">
            <div className="span-div cal-form">
              <span className="first-span">Enter material name</span>
              <input
                type="text"
                className="form-control"
                id="material"
                name="number"
                placeholder="Please enter the material"
                required
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              />
            </div>
          </label>
          <label htmlFor="price">
            <div className="span-div cal-form">
              <span className="first-span">Enter the price</span>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Please enter the current price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </label>
          <label htmlFor="qty">
            <div className="span-div cal-form">
              <span className="first-span">Enter the quantity</span>
              <input
                type="number"
                className="form-control"
                id="qty"
                name="qty"
                placeholder="Please enter the quantity"
                required
                value={qty}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </label>
          <div className="btn-div">
            <button type="submit" onClick={calculator} className="list-btn">
              Result
            </button>
            <button type="button" onClick={clearResult} className="list-btn d">
              Clear
            </button>
          </div>
        </div>
      </form>

      <p id="display">
        The current price of {material} is {comma(result)} Naira
      </p>
    </div>
  );
};

export default Calculator;
