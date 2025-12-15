import React, { useState } from 'react';
import useApi from '../hooks/useApi';

function ApiDemo() {
  const [endpoint, setEndpoint] = useState('/users');
  const { data, loading, error } = useApi(endpoint);

  return (
    <div className="api-demo">
      <div className="endpoint-controls">
        <button
          onClick={() => setEndpoint('/users')}
          className={endpoint === '/users' ? 'active' : ''}
        >
          Load Users
        </button>
        <button
          onClick={() => setEndpoint('/posts')}
          className={endpoint === '/posts' ? 'active' : ''}
        >
          Load Posts
        </button>
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {data && (
        <div className="data-display">
          <h3>Data from {endpoint}:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <p className="demo-note">
        ✅ Reusable API logic with loading and error states
      </p>
    </div>
  );
}

export default ApiDemo;