const FilterMovie = (props) => {
  const handleChangeFilter = (event) => {
    const filterMovieValue = event.target.value;

    props.handleChangeMovie(filterMovieValue);
  };

  return (
    <div>
      <label className="label">Movie</label>
      <input
        className="filter"
        value={props.movieFilter}
        onChange={handleChangeFilter}
        type="text"
      ></input>
    </div>
  );
};
export default FilterMovie;
