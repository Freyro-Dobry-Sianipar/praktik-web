import React from 'react';
import useToggle from '../hooks/useToggle';

function ToggleDemo() {
  const modal = useToggle(false);
  const darkMode = useToggle(false);
  const featureFlag = useToggle(true);

  return (
    <div className={`toggle-demo ${darkMode.value ? 'dark-mode' : ''}`}>
      <div className="toggle-group">
        <h3>Modal Control</h3>
        <button onClick={modal.toggle}>
          {modal.value ? 'Close' : 'Open'} Modal
        </button>
        <p>Modal is: {modal.value ? 'OPEN' : 'CLOSED'}</p>
      </div>

      <div className="toggle-group">
        <h3>Dark Mode</h3>
        <button onClick={darkMode.toggle}>Toggle Dark Mode</button>
        <p>Dark mode is: {darkMode.value ? 'ON' : 'OFF'}</p>
      </div>

      <div className="toggle-group">
        <h3>Feature Flag</h3>
        <button onClick={featureFlag.toggle}>Toggle Feature</button>
        <p>Feature is: {featureFlag.value ? 'ENABLED' : 'DISABLED'}</p>
      </div>

      <p className="demo-note">
        ✅ Simple boolean state management reusable across components
      </p>
    </div>
  );
}

export default ToggleDemo;