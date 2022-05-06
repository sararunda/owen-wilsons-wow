const FilterYear = (props) => {
  const handleChangeSelect = (event) => {
    const filterYearValue = event.currentTarget.value;
    props.handleChangeYear(filterYearValue);
  };
  const renderYears = () => {
    return props.years.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };
  return (
    <div>
      <label className="label">Year</label>
      <select
        className="filter"
        name=""
        id=""
        onChange={handleChangeSelect}
        value={props.yearFilter}
      >
        <option value="">all</option>
        {renderYears()}
      </select>
    </div>
  );
};
export default FilterYear;
