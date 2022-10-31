import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: 'list',
      text: 'List of Materials',
    },
    {
      id: 3,
      path: 'total',
      text: 'Total',
    },
  ];

  const body = document.querySelector('body');

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
    document.querySelector('.menuNav').style.display = 'block';
  };

  const closeMenu = () => {
    setNavbarOpen(false);
    body.style.overflow = 'auto';
  };

  return (
    <div className="navbar">
      <div>
        <NavLink activeClass="active" to="/" spy={true} smooth={true}>
          <h2 className="header-text">Material Counter App</h2>
        </NavLink>
      </div>

      <ul style={{ listStyleType: 'none' }} className="desktop-ul">
        <li>
          <NavLink activeClass="active" to="/" spy={true} smooth={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="list" spy={true} smooth={true}>
            List of Materials
          </NavLink>
        </li>
        <li>
          <NavLink to="total" spy={true} smooth={true}>
            Total
          </NavLink>
        </li>
      </ul>

      <button className="btn-nav" type="button">
        {navbarOpen ? (
          <IoMdClose
            className="toggleClose"
            style={{
              color: 'var(--orange)',
              width: '40px',
              height: '40px',
            }}
            onClick={() => closeMenu()}
          />
        ) : (
          <FiMenu
            style={{ color: 'var(--orange)', width: '40px', height: '40px' }}
            onClick={handleToggle}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeclassname="active-link"
              onClick={() => closeMenu()}
              spy={true}
              smooth={true}
              exact
              id="menu-link"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
