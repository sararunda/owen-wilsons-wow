import { Link } from 'react-router-dom';
const MovieItem = (props) => {
  return (
    <div className="container-item">
      <img className="poster" alt={props.movie.name} src={props.movie.poster} />
      <h2 className="text">{props.movie.name}</h2>
      <p className="text">{props.movie.fullLine}</p>
      <p className="text">{props.movie.year}</p>
      <Link className="link-info" to={`/movie/${props.movie.id}`}>
        + info
      </Link>
    </div>
  );
};
export default MovieItem;
