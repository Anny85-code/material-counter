import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CounterPage.css';

const CounterPage = () => {
  let [count, setCount] = useState(0);

  const name = localStorage.getItem('name');

  const increment = (e) => {
    if (count > 0 && e.target.id === 'subtract') {
      setCount((count -= 1));
    }
    if (e.target.id === 'add') {
      setCount((count += 1));
    }
  };

  const saveTO = () => {
    localStorage.setItem('count', count);
    alert(`${name} saved!`);
  };

  return (
    <div className="main-conter-container">
      <p>{name}</p>
      <p>{count}</p>
      <div className="btn-container">
        <button onClick={increment} id="subtract" className="add-item-btn">
          Decrement
        </button>

        <button onClick={increment} id="add" className="add-item-btn">
          Increment
        </button>
      </div>
      <NavLink to="/">
        <button onClick={saveTO} id="save-btn">
          Save
        </button>
      </NavLink>
    </div>
  );
};

export default CounterPage;
