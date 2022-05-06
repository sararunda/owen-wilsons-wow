import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
const Filters = (props) => {
  const handlSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <section>
      <form className="form" action="" onSubmit={handlSubmitForm}>
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
