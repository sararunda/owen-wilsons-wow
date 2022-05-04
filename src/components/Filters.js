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
        <FilterYear
          years={props.years}
          yearFilter={props.yearFilter}
          handleChangeYear={props.handleChangeYear}
        />
      </form>
    </section>
  );
};
export default Filters;
