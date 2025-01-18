import axios from "axios";
import { useState, useCallback } from "react";

const useFetchlogout = (url, token) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const triggerLogout = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, {}, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setIsSuccess(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url, token]);

  return { isLoading, error, isSuccess, triggerLogout };
};

export default useFetchlogout;
