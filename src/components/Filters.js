import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
const Filters = (props) => {
  return (
    <section>
      <form action="">
        <FilterMovie
          movieFilter={props.movieFilter}
          handleChangeMovie={props.handleChangeMovie}
        />
        <FilterYear />
      </form>
    </section>
  );
};
export default Filters;
