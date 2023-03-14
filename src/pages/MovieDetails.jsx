import { useParams, Outlet, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const myKey = 'b1cca9f4ff0056a5a4eafc6c5006a5a4';

const getPosterURL = posterPath => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

export const MovieDetails = () => {
  const { id } = useParams();
  const [detailsMovie, setDetailsMovie] = useState([]);
  // console.log(detailsMovie);
  const navigate = useNavigate();
  const goBack = () => navigate('/');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${myKey}`)
      .then(response => response.json())
      .then(data => {
        setDetailsMovie(data);
      });
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div style={{ marginRight: '50px' }}>
          <img src={getPosterURL(detailsMovie.poster_path)} alt="film-name" />
        </div>
        <div>
          <h1>{detailsMovie.original_title}</h1>

          <p>Popularity: {detailsMovie.popularity}</p>
          <h2>Overview</h2>
          <p>{detailsMovie.overview}</p>
          <h2>Genres:</h2>
          <ul>
            {detailsMovie.genres?.map(gener => (
              <li key={gener.id}>{gener.name}</li>
            ))}
          </ul>
          <h2>
            Homepage:{' '}
            <a href={detailsMovie.homepage}>{detailsMovie.original_title}</a>
          </h2>
        </div>
      </div>
      <div>
        <h1>Aditional Information</h1>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
