import React from 'react';
import './List.css';

const List = () => {
  const count = localStorage.getItem('count');
  const name = localStorage.getItem('name');
  const materials = [];
  materials.push([name, count]);
  localStorage.setItem('materials', JSON.stringify(materials));
  const retrievedMaterials = JSON.parse(localStorage.getItem('materials'));
  
  return (
    <div className='main-container-list'>
      <ul>
        {retrievedMaterials.map((item) => (
          <>
            <li>Material: {item[0]}</li>
            <li>Total: {item[1]}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default List
