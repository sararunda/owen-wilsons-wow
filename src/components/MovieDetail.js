import { useEffect } from 'react';
import localStorage from '../service/localStorage';
import { Link } from 'react-router-dom';

const MovieDetail = (props) => {
  useEffect(() => {
    localStorage.set(props.movie.id, props.movie);
  }, []);

  return (
    <article className="container-detail">
      <div className="detail-content">
        <img
          className="poster"
          alt={props.movie.name}
          src={props.movie.poster}
        />
        <div className="detail">
          <h2 className="detail-text">{props.movie.name}</h2>
          <p className="detail-wow">{props.movie.fullLine}</p>
          <h3 className="detail-director">Director: {props.movie.director}</h3>
          <p className="audio">
            <a
              className="audio"
              href={props.movie.audio}
              rel="noreferrer"
              target="_blank"
            >
              Audio wow
            </a>
          </p>
          <Link className="back" to="/">
            Back
          </Link>
        </div>
      </div>
    </article>
  );
};
export default MovieDetail;
