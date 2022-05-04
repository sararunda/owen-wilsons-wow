const MovieItem = (props) => {
  return (
    <>
      <img className="poster" alt="" src={props.movies.poster} />
      <h2>{props.movies.name}</h2>
      <p>{props.movies.fullLine}</p>
      <p>{props.movies.year}</p>
    </>
  );
};
export default MovieItem;
