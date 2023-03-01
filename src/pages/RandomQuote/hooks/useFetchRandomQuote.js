import { useEffect, useState } from 'react';
import axios from 'axios';

const RANDOM_QUOTE_URL = 'https://api.quotable.io/random';

const INITIAL_RANDOM_QUOTE_DATA = {
    _id: "",
    content: "",
    author: "",
    tags:[],
    authorSlug: "",
    length: 0,
    dateAdded: "",
    dateModified: "",
}

async function fetchRandomQuoteData() {
  const { data } = await axios.get(RANDOM_QUOTE_URL);
  return data;
} 

function useFetchRandomQuote()  {
  const [randomQuoteData, setRandomQuoteData] = useState(INITIAL_RANDOM_QUOTE_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await fetchRandomQuoteData();
        setRandomQuoteData(data);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };
    fetch();
  }, []);

  async function refetch() {
    setLoading(true)
    const data = await fetchRandomQuoteData();
    setRandomQuoteData(data); 
    setLoading(false)
  }

  return {
    randomQuoteData,
    loading,
    refetch,
  };
};

export default useFetchRandomQuote;