import MovieItem from './MovieItem';
const MovieList = (props) => {
  const renderList = () => {
    return props.movies.map((movie, index) => {
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
