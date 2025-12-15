import React from 'react';
import CounterDemo from './components/CounterDemo';
import FormDemo from './components/FormDemo';
import ApiDemo from './components/ApiDemo';
import LocalStorageDemo from './components/LocalStorageDemo';
import ToggleDemo from './components/ToggleDemo';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="app">
      <h1>Custom Hooks & Reusability</h1>

      <div className="demo-section">
        <h2>1. useCounter Hook</h2>
        <CounterDemo />
      </div>

      <div className="demo-section">
        <h2>2. useForm Hook</h2>
        <FormDemo />
      </div>

      <div className="demo-section">
        <h2>3. useApi Hook</h2>
        <ApiDemo />
      </div>

      <div className="demo-section">
        <h2>4. useLocalStorage Hook</h2>
        <LocalStorageDemo />
      </div>

      <div className="demo-section">
        <h2>5. useToggle Hook</h2>
        <ToggleDemo />
      </div>
    </div>
  );
}

export default App;