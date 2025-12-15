import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data based on URL
        let mockData;
        if (url.includes('/users')) {
          mockData = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
          ];
        } else if (url.includes('/posts')) {
          mockData = [
            { id: 1, title: 'Post 1', content: 'Content 1' },
            { id: 2, title: 'Post 2', content: 'Content 2' }
          ];
        } else {
          mockData = { message: 'Data from API' };
        }

        setData(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useApi;