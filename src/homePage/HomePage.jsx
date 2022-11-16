import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [name, setName] = useState('');

  const handleAddItem = () => {
    localStorage.setItem('name', name);
  };

  const condition = name === '';

  return (
    <div className="main-container">
      <form action="" className="material-form">
        <div className="form-group">
          <label htmlFor="name">
            <div className="span-div">
              <span className="first-span">
                Name of material<span style={{ color: 'red' }}>*</span>
              </span>
              <input
                type="text"
                className="form-control"
                id="material-name"
                name="name"
                placeholder="Please enter the material you want to count"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </label>
        </div>

          <div className="form-group-btn">
            { !condition && (<NavLink to="/counterpage" style={{ textDecoration: 'none' }}>
              <button
                type="button"
                className="add-item-btn"
                onClick={handleAddItem}
                style={{ margin: '30px' }}
              >
                Enter
              </button>
            </NavLink>)}
          </div>
       
      </form>
    </div>
  );
};

export default HomePage;
