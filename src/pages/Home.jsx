import { useEffect } from 'react';

const myKey = 'b1cca9f4ff0056a5a4eafc6c5006a5a4';
//api.themoviedb.org/3/movie/550?api_key=b1cca9f4ff0056a5a4eafc6c5006a5a4

export const Home = () => {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=${myKey}&sort_by=popularity.desc`
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return <h1>Movies Weekly</h1>;
};
