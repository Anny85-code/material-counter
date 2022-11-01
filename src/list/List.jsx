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
    <div className='main-item-list'>
      <div className="main-container-list">
        <div className="custrans-name1">
          <p className="columns">
            <span className="cus-name1">Material</span>
          </p>
          <p className="columns i">Total</p>
        </div>
        <div className="custrans-name1">
          <p className="columns" id="col">
            {/* <p className="custransactname"></p> */}
          </p>
          <p
            className="columns i"
            id="col"
            style={{
              // borderRight: '2px solid crimson',
              borderBottom: '2px solid crimson',
            }}
          ></p>
        </div>
        {materials.map((item) => (
          <ul id="p-child">
            <li>
              <div className="custrans-name1">
                {/* <p className="columns"></p> */}
                <p className="columns " style={{ color: 'crimson' }} id="col">
                  {item.name}
                </p>
                {/* <p
                  className="columns i"
                  style={{ borderRight: '2px solid crimson' }}
                ></p> */}
                <p
                  className="columns i"
                  id="col"
                  // style={{ borderRight: '2px solid crimson' }}
                >
                  {item.count}
                </p>
                {/* <p className="columns"></p> */}
              </div>
            </li>
            {/* <li> {item.count}</li> */}
          </ul>
        ))}
      </div>
      <div className='btn-div'>
        <NavLink to="/">
          <button id="save-btn">Add Item</button>
        </NavLink>
        <NavLink to="/">
          <button id="save-btn" onClick={clearItems}>
            Clear
          </button>
        </NavLink>
        {/* </ul> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default List;
