import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const myKey = 'b1cca9f4ff0056a5a4eafc6c5006a5a4';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // console.log(movies);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${myKey}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.results?.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
              }}
              state={{ from: '/' }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
