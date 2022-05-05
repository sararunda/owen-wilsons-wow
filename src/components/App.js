import '../styles/App.scss';
import GetApiData from '../service/fetch';
import MovieList from './MovieList';
import Filters from '../components/Filters';
import { useEffect, useState } from 'react';

function App() {
  //states variables
  const [movies, setMovies] = useState([]);
  const [movieFilter, setMovieFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      setMovies(dataApi);
    });
  }, []);

  //handling functions
  const handleChangeMovie = (filterMovieValue) => {
    setMovieFilter(filterMovieValue);
  };
  const handleChangeYear = (filterYearValue) => {
    setYearFilter(filterYearValue);
  };

  //new array tu get years

  const getYears = () => {
    const years = movies.map((year) => year.year);

    const uniqueYears = years.filter((year, index) => {
      return years.indexOf(year) === index;
    });
    console.log(uniqueYears);
    return uniqueYears;
  };

  return (
    <div>
      <h1>Owen Wilson`s "wow"</h1>
      <Filters
        movieFilter={movieFilter}
        yearFilter={yearFilter}
        handleChangeMovie={handleChangeMovie}
        handleChangeYear={handleChangeYear}
        years={getYears()}
      />
      <MovieList
        movieFilter={movieFilter}
        yearFilter={yearFilter}
        movies={movies}
      />
    </div>
  );
}

export default App;
