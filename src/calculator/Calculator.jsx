import React, { useState } from 'react';

const Calculator = () => {
  const [material, setMaterial] = useState('');
  const [price, setPrice] = useState(0);
  const [qty, setQuantity] = useState(0);
  const [result, setResult] = useState(0);

  const calculator = (e) => {
    e.preventDefault();
    setResult(price * qty);
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

      <p>The current price of {material} is {result} Naira</p>
    </div>
  );
};

export default Calculator;
