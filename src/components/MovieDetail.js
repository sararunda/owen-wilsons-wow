import { useEffect } from 'react';
import localStorage from '../service/localStorage';

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
          escuchar audio
        </a>
      </p>
    </article>
  );
};
export default MovieDetail;
