import React, { useState } from 'react';

const EventDemo = () => {
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [keyInfo, setKeyInfo] = useState('');

  // Click Events
  const handleClick = () => {
    setMessage('Tombol diklik!');
  };

  const handleDoubleClick = () => {
    setMessage('Double click terdeteksi!');
  };

  // Mouse Events
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleMouseEnter = () => {
    setMessage('Mouse masuk area!');
  };

  const handleMouseLeave = () => {
    setMessage('Mouse keluar area!');
  };

  // Keyboard Events
  const handleKeyDown = (event) => {
    setKeyInfo(`Key: ${event.key}, Code: ${event.code}`);
  };

  const handleKeyUp = () => {
    setTimeout(() => setKeyInfo(''), 1000);
  };

  // Context Menu
  const handleContextMenu = (event) => {
    event.preventDefault();
    setMessage('Context menu dicegah!');
  };

  return (
    <div className="event-demo">
      <h2>Demo Penanganan Event</h2>

      {/* Button Events */}
      <div className="button-group">
        <button onClick={handleClick} className="btn btn-primary">
          Klik Saya
        </button>

        <button onDoubleClick={handleDoubleClick} className="btn btn-secondary">
          Double Klik Saya
        </button>

        <button onContextMenu={handleContextMenu} className="btn btn-warning">
          Right Click Saya
        </button>
      </div>

      {/* Mouse Area */}
      <div
        className="mouse-area"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3>Area Interaksi Mouse</h3>
        <p>Gerakkan mouse di area ini</p>
        <p>Posisi: X: {position.x}, Y: {position.y}</p>
      </div>

      {/* Keyboard Input */}
      <div className="keyboard-demo">
        <h3>Demo Keyboard Events</h3>
        <input
          type="text"
          placeholder="Ketik sesuatu di sini..."
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          className="keyboard-input"
        />
        {keyInfo && <p className="key-info">{keyInfo}</p>}
      </div>

      {/* Message Display */}
      {message && (
        <div className="message-box">
          {message}
        </div>
      )}
    </div>
  );
};

export default EventDemo;
