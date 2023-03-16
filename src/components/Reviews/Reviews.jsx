import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const myKey = 'b1cca9f4ff0056a5a4eafc6c5006a5a4';
const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${myKey}`)
      .then(response => response.json())
      .then(data => setReviews(data.results));
  }, [id]);

  return (
    <div>
      {reviews.length === 0 ? (
        <div style={{ fontWeight: 'bold', fontSize: '50px', color: 'red' }}>
          Sorry, we didnt find information about this film
        </div>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
              <a href={review.url} target="_blank" rel="noreferrer">
                Original Page
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
