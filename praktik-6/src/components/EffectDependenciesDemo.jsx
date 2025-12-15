import React, { useState, useEffect } from 'react';

const EffectDependenciesDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [timer, setTimer] = useState(0);
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  // Effect 1: Tanpa dependencies — dijalankan setelah setiap render
  useEffect(() => {
    addLog('Effect tanpa dependencies dijalankan');
  });

  // Effect 2: Empty dependencies — sekali saat mount
  useEffect(() => {
    addLog('Effect dengan [] dijalankan (mount)');
    return () => {
      addLog('Cleanup effect [] (unmount)');
    };
  }, []);

  // Effect 3: Dependency count
  useEffect(() => {
    addLog(`Effect [count] dijalankan, count: ${count}`);
    return () => {
      addLog('Cleanup effect [count] sebelumnya');
    };
  }, [count]);

  // Effect 4: Dependency name
  useEffect(() => {
    if (name) {
      addLog(`Effect [name] dijalankan, name: ${name}`);
    }
  }, [name]);

  // Effect 5: Multiple dependencies
  useEffect(() => {
    addLog(`Effect [count, name] dijalankan, count: ${count}, name: ${name}`);
  }, [count, name]);

  // Effect 6: Window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    addLog('Event listener resize dipasang');
    return () => {
      addLog('Event listener resize dibersihkan');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect 7: Timer
  useEffect(() => {
    addLog('Timer dimulai');
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => {
      addLog('Timer dihentikan');
      clearInterval(interval);
    };
  }, []);

  const resetLogs = () => {
    setLogs([]);
  };

  return (
    <div className="dependencies-demo">
      <h2>Demo Effect Dependencies</h2>
      <div className="controls">
        <div className="control-group">
          <label>Count: {count}</label>
          <button onClick={() => setCount(prev => prev + 1)} className="btn btn-primary">
            +1 Count
          </button>
        </div>
        <div className="control-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-input"
            placeholder="Ketik nama..."
          />
        </div>
        <div className="control-group">
          <label>Window Width: {windowWidth}px</label>
        </div>
        <div className="control-group">
          <label>Timer: {timer}s</label>
        </div>
        <button onClick={resetLogs} className="btn btn-secondary">
          Reset Logs
        </button>
      </div>

      <div className="explanation">
        <h3>Penjelasan Dependencies:</h3>
        <ul>
          <li><strong>No dependencies</strong> — Run setelah setiap render</li>
          <li><strong>[]</strong> — Run sekali setelah mount</li>
          <li><strong>[count]</strong> — Run ketika count berubah</li>
          <li><strong>[name]</strong> — Run ketika name berubah</li>
          <li><strong>[count, name]</strong> — Run ketika count ATAU name berubah</li>
        </ul>
      </div>

      <div className="logs-container">
        <h3>Effect Execution Logs:</h3>
        <div className="logs">
          {logs.length === 0 ? (
            <p>Belum ada logs...</p>
          ) : (
            logs.slice(-10).map((log, index) => (
              <div key={index} className="log-entry">
                {log}
              </div>
            ))
          )}
        </div>
        <p className="log-count">Total logs: {logs.length}</p>
      </div>
    </div>
  );
};

export default EffectDependenciesDemo;