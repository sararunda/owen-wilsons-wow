const FilterMovie = (props) => {
  const handleChangeFilter = (event) => {
    const filterMovieValue = event.target.value;

    props.handleChangeMovie(filterMovieValue);
  };

  return (
    <>
      <label>Movie</label>
      <input
        value={props.movieFilter}
        onChange={handleChangeFilter}
        type="text"
      ></input>
    </>
  );
};
export default FilterMovie;
