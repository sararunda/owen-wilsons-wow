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
            <MovieItem movies={movie} />
          </li>
        );
      });
  };

  return <ul>{renderList()}</ul>;
};
export default MovieList;
