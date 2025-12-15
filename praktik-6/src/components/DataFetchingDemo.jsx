import React, { useState, useEffect } from 'react';

const DataFetchingDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);
  const [userDetail, setUserDetail] = useState(null);

  // Fetch semua users — sekali saat mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulasi API call dengan timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        const dummyUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
          { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
        ];
        setUsers(dummyUsers);
      } catch (err) {
        setError('Gagal memuat data users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Fetch detail user berdasarkan userId
  useEffect(() => {
    if (!userId) return;
    const fetchUserDetail = async () => {
      try {
        setLoading(true);
        // Simulasi API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const dummyUserDetail = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
          phone: `+62 812-3456-789${userId}`,
          address: `Jl. Contoh No. ${userId}, Jakarta`,
        };
        setUserDetail(dummyUserDetail);
      } catch (err) {
        setError(`Gagal memuat detail user ${userId}`);
        console.error('Error fetching user detail:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetail();
  }, [userId]);

  const handleUserChange = (event) => {
    setUserId(parseInt(event.target.value));
  };

  return (
    <div className="data-fetching-demo">
      <h2>Demo Data Fetching dengan useEffect</h2>

      {/* Loading State */}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Memuat data...</p>
        </div>
      )}

      {/* Error State */}
      {error && <div className="error-message">{error}</div>}

      {/* Users List */}
      <div className="users-section">
        <h3>Daftar Users</h3>
        <div className="users-grid">
          {users.map(user => (
            <div
              key={user.id}
              className={`user-card ${userId === user.id ? 'active' : ''}`}
            >
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* User Detail */}
      <div className="user-detail-section">
        <h3>Detail User</h3>
        <div className="user-selector">
          <label>Pilih User ID:</label>
          <select value={userId} onChange={handleUserChange}>
            {[1, 2, 3, 4].map(id => (
              <option key={id} value={id}>
                User {id}
              </option>
            ))}
          </select>
        </div>

        {userDetail && (
          <div className="user-detail-card">
            <h4>{userDetail.name}</h4>
            <p><strong>Email:</strong> {userDetail.email}</p>
            <p><strong>Phone:</strong> {userDetail.phone}</p>
            <p><strong>Address:</strong> {userDetail.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetchingDemo;