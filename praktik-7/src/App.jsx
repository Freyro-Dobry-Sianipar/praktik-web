// File: src/App.jsx
import React from 'react';
import './App.css';
import BasicFetchingDemo from './components/BasicFetchingDemo';
import AdvancedFetchingDemo from './components/AdvancedFetchingDemo';
import CRUDOperationsDemo from './components/CRUDOperationsDemo';

function App() {
  return (
    <div className="App">
      <h1>Praktik Data Fetching - Pertemuan 7</h1>
      <p>Integrasi React dengan RESTful API</p>
      <BasicFetchingDemo />
      <AdvancedFetchingDemo />
      <CRUDOperationsDemo />
    </div>
  );
}

export default App;