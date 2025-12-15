// File: src/pages/Products.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  // Data produk dummy
  const products = [
    { id: 1, name: 'Laptop', price: 12000000, category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 5000000, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: 800000, category: 'Electronics' },
    { id: 4, name: 'Book', price: 150000, category: 'Education' },
    { id: 5, name: 'Desk Lamp', price: 300000, category: 'Home' },
  ];

  return (
    <div className="page products-page">
      <h1>📦 Our Products</h1>
      <p>Jelajahi berbagai produk yang kami tawarkan</p>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">Rp {product.price.toLocaleString('id-ID')}</p>
            <p className="category">{product.category}</p>
            <Link
              to={`/products/${product.id}`}
              className="btn btn-secondary"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;