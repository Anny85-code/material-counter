import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [material, setMaterial] = useState('');
  const [price, setPrice] = useState(0);
  const [qty, setQuantity] = useState(0);
  const [result, setResult] = useState(0);

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
  };

  return (
    <div>
      <form action="">
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

        <button type="submit" onClick={calculator}>Result</button>
      </form>

      <p id='display'>The current price of {material} is {result} Naira</p>
      <button type="button" onClick={clearResult}>Clear</button>
    </div>
  );
};

export default Calculator;
