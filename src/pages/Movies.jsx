import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Form from 'components/Form';

const myKey = 'b1cca9f4ff0056a5a4eafc6c5006a5a4';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [queryFilms, setQueryFilms] = useState([]);
  const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);

  const handleFormSubmit = choosenFilm => {
    if (choosenFilm === '') {
      toast.error('Please, enter movie name!');
      return;
    }
    setSearchParams({ query: choosenFilm });
    setIsQuerySubmitted(true);
  };

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${query}`
      )
        .then(response => response.json())
        .then(data => {
          setQueryFilms(data.results);
        });
    }
  }, [query]);

  return (
    <main>
      <Form onSubmit={handleFormSubmit} />
      {isQuerySubmitted && queryFilms.length === 0 ? (
        <p>Sorry, but you should turn correct value</p>
      ) : (
        <ul>
          {queryFilms.map(film => (
            <li key={film.id}>
              <Link
                to={`/movies/${film.id}`}
                state={{ from: `/movies?query=${query}` }}
              >
                {film.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
