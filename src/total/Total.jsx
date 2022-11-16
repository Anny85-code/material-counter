import React from 'react';
import { getList } from '../counterPage/CounterPage';

const Total = () => {
  const list = getList();

  const collate = Object.values(
    list.reduce((obj, item) => {
      obj[item.name]
        ? (obj[item.name].count += item.count)
        : (obj[item.name] = item);
      return obj;
    }, {})
    );
    console.log(list)
  return (
    <div className="main-item-list">
      <div className="main-container-list">
        <div className="custrans-name1">
          <p className="columns">
            <span className="cus-name1 p">Material</span>
          </p>
          <p className="columns i p">Total</p>
        </div>
        {collate.map((person) => (
          <ul id="p-child">
            <li>
              <div className="custrans-name1">
                <p
                  className="columns "
                  style={{ color: '#000' }}
                  id="col"
                >
                  {person.name}
                </p>
                <p className="columns i" id="col">
                  {person.count || person.count1}
                </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Total;
