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
          <p className="columns">
            <span className="cus-name1 p">Material</span>
          </p>
          <p className="columns i p">Items</p>
        </div>
        <div className="custrans-name1">
          <p className="columns" id="col"></p>
          <p
            className="columns i"
            // id="col"
            style={{
              borderBottom: '2px solid rgb(108, 88, 223)',
            }}
          ></p>
        </div>
        {materials.map((item) => (
          <ul id="p-child">
            <li>
              <div className="custrans-name1">
                <p
                  className="columns "
                  style={{ color: 'rgb(108, 88, 223)' }}
                  id="col"
                >
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
