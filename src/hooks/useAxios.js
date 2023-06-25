import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getApiData = useCallback(async () => {
    setLoading(true);
    try {
      const results = await axios.get(url);
      setData(results.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return { data, error, loading };
};

export default useAxios;


