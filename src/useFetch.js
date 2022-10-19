import { useState, useEffect } from 'react';

const useFetchData = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then(response => {
          // console.log(response)
          if (!response.ok) {
            throw new Error('unf could not fetch data for that response');
          }
          return response.json();
        })
        .then(data => {
          // console.log(data)
          setData(data);
          setIsPending(false);
          // initially this is true and we set it to false as soon as data is fetched
          setError(null);
          console.log(data.body)
        })
        .catch(err => {
          // console.log(err.message)

          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 100);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetchData;
