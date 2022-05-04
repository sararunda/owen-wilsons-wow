const FilterYear = (props) => {
  const handleChangeSelect = (event) => {
    const filterYearValue = event.currentTarget.value;
    props.handleChangeYear(filterYearValue);
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
        <option value="uno">uno</option>
      </select>
    </>
  );
};
export default FilterYear;
