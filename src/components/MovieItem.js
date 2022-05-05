import { Link } from 'react-router-dom';
const MovieItem = (props) => {
  return (
    <>
      <img className="poster" alt={props.movie.name} src={props.movie.poster} />
      <h2>{props.movie.name}</h2>
      <p>{props.movie.fullLine}</p>
      <p>{props.movie.year}</p>
      <Link to={`/movie/${props.movie.id}`}>+ info</Link>
    </>
  );
};
export default MovieItem;
