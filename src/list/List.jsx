import React from 'react';
import { NavLink } from 'react-router-dom';
import { getList } from '../counterPage/CounterPage';
import './List.css';

const List = () => {
  const materials = getList();

  const clearItems = () => {
    localStorage.clear();
  };

  return (
    <div className="main-item-list">
      <div className="main-container-list">
        <div className="custrans-name1">
          <p className="column i" id="a">
            <span className="cus-name1 p">No.</span>
          </p>
          <p className="columns">
            <span className="cus-name1 p">Materials</span>
          </p>
          <p className="columns i p">Number</p>
        </div>
        {materials.map((item, i) => (
          <ul id="p-child">
            <li key={item.id}>
              <div className="custrans-name1">
                <p id="a" className="column i">
                  {i + 1}
                </p>
                <p className="columns " style={{ color: '#000' }} id="col">
                  {item.name}
                </p>
                <p className="columns i" id="col">
                  {item.count}
                </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <div className="btn-div">
        <NavLink to="/">
          <button className="list-btn">Add Item</button>
        </NavLink>
        <NavLink to="/">
          <button className="list-btn d" onClick={clearItems}>
            Clear
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default List;
