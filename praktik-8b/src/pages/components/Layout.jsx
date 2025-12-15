// File: src/components/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="app">
      {/* Navigation component yang muncul di semua halaman */}
      <Navigation />

      {/* Main content area - akan diisi oleh route yang aktif */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy;2024 My React App. Pertemuan 8 - React Router</p>
      </footer>
    </div>
  );
};

export default Layout;