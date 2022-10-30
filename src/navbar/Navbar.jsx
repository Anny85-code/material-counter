import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoMdClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: 'home',
      text: 'Home',
    },
    {
      id: 2,
      path: 'list of materials',
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
  }

   const closeMenu = () => {
    setNavbarOpen(false);
    body.style.overflow = 'auto';
   }

  return (
    <div className="navbar">
      <div>
        <h2 className="header-text">Material Counter App</h2>
      </div>
      <ul style={{ listStyleType: 'none', '#000': '' }} className="desktop-ul">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              activeclassname="active-link"
              spy={true}
              smooth={true}
              exact
            >
              {link.text}
            </Link>
          </li>
        ))}
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
            <Link
              to={link.path}
              activeclassname="active-link"
              onClick={() => closeMenu()}
              spy={true}
              smooth={true}
              exact
              id="menu-link"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar
