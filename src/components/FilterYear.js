const FilterYear = (props) => {
  const handleChangeSelect = (event) => {
    const filterYearValue = event.currentTarget.value;
    props.handleChangeYear(filterYearValue);
  };
  const renderYears = () => {
    return props.years.map((year) => {
      return <option value={year}>{year}</option>;
    });
  };
  return (
    <>
      <label>Year</label>
      <select
        name=""
        id=""
        onChange={handleChangeSelect}
        value={props.yearFilter}
      >
        <option value="all">all</option>
        {renderYears()}
      </select>
    </>
  );
};
export default FilterYear;
