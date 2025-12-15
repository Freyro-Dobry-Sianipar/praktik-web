import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  // Multiple state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [users, setUsers] = useState([]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!name || !email || !age) {
      alert('Harap isi semua field!');
      return;
    }

    // Tambah user baru
    const newUser = {
      id: Date.now(),
      name,
      email,
      age: parseInt(age),
      isSubscribed,
      registeredAt: new Date().toLocaleDateString()
    };

    // Update state users
    setUsers(prevUsers => [...prevUsers, newUser]);

    // Reset form
    setName('');
    setEmail('');
    setAge('');
    setIsSubscribed(false);
  };

  // Delete user
  const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Usia:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Masukkan usia"
            min="1"
            max="120"
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
            />
            Subscribe to newsletter
          </label>
        </div>

        <button type="submit" className="submit-btn">Tambah User</button>
      </form>

      {/* Display registered users */}
      <div className="users-list">
        <h3>Registered Users ({users.length})</h3>
        {users.length === 0 ? (
          <p className="no-users">Belum ada user yang terdaftar</p>
        ) : (
          <div className="users-grid">
            {users.map(user => (
              <div key={user.id} className="user-card">
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  ✖
                </button>
                <h4>{user.name}</h4>
                <p>Email: {user.email}</p>
                <p>Usia: {user.age} tahun</p>
                <p>Subscribed: {user.isSubscribed ? 'Y' : 'N'}</p>
                <small>Registered: {user.registeredAt}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
