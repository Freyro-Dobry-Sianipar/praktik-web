// File: src/components/Navigation.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  // Function untuk mengecek apakah link aktif
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">🏠 MyApp</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={isActive('/') ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive('/about') ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={isActive('/products') ? 'active' : ''}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;