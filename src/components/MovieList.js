import MovieItem from './MovieItem';
const MovieList = (props) => {
  const renderList = () => {
    return props.movies
      .filter((movie) =>
        movie.name.toLowerCase().includes(props.movieFilter.toLowerCase())
      )
      .filter((movie) =>
        props.yearFilter === ''
          ? true
          : movie.year === parseInt(props.yearFilter)
      )

      .map((movie, index) => {
        return (
          <li key={index}>
            <MovieItem movie={movie} />
          </li>
        );
      });
  };

  return renderList().length > 0 ? (
    <ul>{renderList()}</ul>
  ) : (
    <p>Not found {props.movieFilter}</p>
  );
};
export default MovieList;
