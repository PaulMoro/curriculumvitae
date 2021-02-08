import { useState, useEffect } from 'react';
const api = 'https://api.themoviedb.org/3/movie/popular?api_key=29ab3bfd741326feef018c4535a4a0cf&language=en-US&page=1';
const preApi = {
  info: {
  },
  results: [
    {
      poster_path: "",
      title: "",
      vote_average: "",
      overview: "",
    }
  ]
}


const useGetData = () => {
  

  const [mydata, setData] = useState(preApi);

  useEffect(() => {
    fetch (api)
      .then(response => response.json())
      .then (data => setData(data))
  }, [])

  return mydata;
}


export default useGetData