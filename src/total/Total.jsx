import React from "react";
import { getList } from "../counterPage/CounterPage";

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
  return (
    <div>
      {collate.map((person) => (
        <div>
          <p>{person.name}</p>
          <p>{person.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Total;
