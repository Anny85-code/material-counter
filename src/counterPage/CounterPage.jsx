import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CounterPage.css';

const getList = () => {
  const list = localStorage.getItem('materials');
  return list ? JSON.parse(list) : [];
};

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

  const addList = (list, input) => {
    list.push(input);
    localStorage.setItem('materials', JSON.stringify(list));
  };

  const saveTO = () => {
    if (name && count > 1) {
      const entry = { name, count };
      const materials = getList();
      addList(materials, entry);
      alert(`${name} saved!`);
      console.log(entry);
    }
  };

  return (
    <div className="main-conter-container">
      <p>{name}</p>

      <input
        type="number"
        value={count}
        className="form-control"
        onChange={(e) => setCount(+e.target.value)}
      />
      <p>{count}</p>
      <div className="btn-container">
        <button onClick={increment} id="subtract" className="add-item-btn">
          Decrement
        </button>

        <button onClick={increment} id="add" className="add-item-btn">
          Increment
        </button>
      </div>
      <div className="new-save-btn">
        <NavLink to="/">
          <button id="save-btn">Add Item</button>
        </NavLink>
        <NavLink to="/">
          <button onClick={saveTO} id="save-btn" type="submit">
            Save
          </button>
        </NavLink>
        <NavLink to="/list">
          <button id="save-btn">View List</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CounterPage;
export { getList };
