import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        // get response from fetch
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        // set data
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.message !== 'AbortError') {
          console.log('Fetch aborted');
        } else {
          // auto catches network or connection error
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
