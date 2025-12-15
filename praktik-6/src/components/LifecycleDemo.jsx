import React, { useState, useEffect } from 'react';

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Effect tanpa dependencies — dijalankan setelah setiap render
  useEffect(() => {
    console.log('Effect tanpa dependencies dijalankan setelah setiap render');
  });

  // Effect dengan empty dependencies — dijalankan sekali saat mount
  useEffect(() => {
    console.log('Component mounted — effect dengan []');
    return () => {
      console.log('Cleanup dari effect dengan [] — component akan unmount');
    };
  }, []);

  // Effect dengan dependency count — dijalankan saat count berubah
  useEffect(() => {
    console.log('Count berubah:', count);
    document.title = `Count: ${count}`;
    return () => {
      console.log('Cleanup sebelum count effect dijalankan lagi');
    };
  }, [count]);

  // Effect dengan dependency isVisible — dijalankan saat isVisible berubah
  useEffect(() => {
    console.log('Visibility berubah:', isVisible);
  }, [isVisible]);

  const increment = () => setCount(prev => prev + 1);
  const toggleVisibility = () => setIsVisible(prev => !prev);

  return (
    <div className="lifecycle-demo">
      <h2>Demo Lifecycle dengan useEffect</h2>
      <div className="counter-section">
        <h3>Counter: {count}</h3>
        <button onClick={increment} className="btn btn-primary">
          Tambah Count
        </button>
      </div>
      <div className="visibility-section">
        <button onClick={toggleVisibility} className="btn btn-secondary">
          {isVisible ? 'Sembunyikan' : 'Tampilkan'} Pesan
        </button>
        {isVisible && (
          <div className="message-box">
            <p>Pesan ini {isVisible ? 'terlihat' : 'tersembunyi'}</p>
            <p>Count saat ini: {count}</p>
          </div>
        )}
      </div>
      <div className="explanation">
        <h4>Perhatikan Console Browser:</h4>
        <p>Buka Developer Tools (F12) dan lihat console untuk melihat kapan effects dijalankan</p>
      </div>
    </div>
  );
};

export default LifecycleDemo;