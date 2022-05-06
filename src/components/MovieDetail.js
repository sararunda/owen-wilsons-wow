import { useEffect } from 'react';
import localStorage from '../service/localStorage';
import { Link } from 'react-router-dom';

const MovieDetail = (props) => {
  useEffect(() => {
    localStorage.set(props.movie.id, props.movie);
  }, []);

  return (
    <article>
      <h2>{props.movie.name}</h2>
      <img className="poster" alt={props.movie.name} src={props.movie.poster} />
      <p>{props.movie.fullLine}</p>
      <h3>Director: {props.movie.director}</h3>
      <p>
        <a href={props.movie.audio} rel="noreferrer" target="_blank">
          Audio wow
        </a>
      </p>
      <Link to="/">Back</Link>
    </article>
  );
};
export default MovieDetail;
