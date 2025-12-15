import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import UserForm from './UserForm';

function App() {
  const [currentView, setCurrentView] = useState('counter');

  return (
    <div className="App">
      <header className="App-header">
        <h1>State Management dengan useState</h1>
        <nav className="nav-tabs">
          <button
            onClick={() => setCurrentView('counter')}
            className={currentView === 'counter' ? 'active' : ''}
          >
            Counter App
          </button>
          <button
            onClick={() => setCurrentView('form')}
            className={currentView === 'form' ? 'active' : ''}
          >
            User Form
          </button>
        </nav>
      </header>

      <main className="App-main">
        {currentView === 'counter' && <Counter />}
        {currentView === 'form' && <UserForm />}
      </main>

      <footer className="App-footer">
        <p>Pertemuan 4 - State Management Dasar</p>
      </footer>
    </div>
  );
}

export default App;
