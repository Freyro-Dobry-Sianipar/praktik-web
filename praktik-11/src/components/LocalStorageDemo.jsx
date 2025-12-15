import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function LocalStorageDemo() {
  const [theme, setTheme] = useLocalStorage('app-theme', 'light');
  const [username, setUsername] = useLocalStorage('username', '');

  const resetSettings = () => {
    setTheme('light');
    setUsername('');
  };

  return (
    <div className="local-storage-demo">
      <div className="setting-group">
        <h3>Theme Setting</h3>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
        </select>
        <p>Current theme: {theme}</p>
      </div>

      <div className="setting-group">
        <h3>Username</h3>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <p>Stored username: {username || 'None'}</p>
      </div>

      <button onClick={resetSettings}>Reset Settings</button>

      <p className="demo-note">
        ✅ Persistent state across browser refreshes
      </p>
    </div>
  );
}

export default LocalStorageDemo;