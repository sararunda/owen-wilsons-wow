const MovieDetail = (props) => {
  return (
    <article>
      <h2>{props.movie.name}</h2>
      <img className="poster" alt={props.movie.name} src={props.movie.poster} />
      <p>{props.movie.fullLine}</p>
      <h3>Director: {props.movie.director}</h3>
      <p>
        <a href={props.movie.audio} target="_blank">
          escuchar audio
        </a>
      </p>
    </article>
  );
};
export default MovieDetail;
