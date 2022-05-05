import '../styles/App.scss';
import GetApiData from '../service/fetch';
import MovieList from './MovieList';
import Filters from '../components/Filters';
import MovieDetail from './MovieDetail';
import localStorage from '../service/localStorage';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';

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

  //new array to get years

  const getYears = () => {
    const years = movies.map((year) => year.year);

    const uniqueYears = years.filter((year, index) => {
      return years.indexOf(year) === index;
    });

    return uniqueYears;
  };

  //movie detail
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:id', pathname);

  const movieId = dataPath !== null ? dataPath.params.id : null;
  const movieInLocalStorage = localStorage.get(movieId, null);
  const movieDetail =
    movieInLocalStorage !== null
      ? movieInLocalStorage
      : movies.find((movie) => movie.id === movieId);

  return (
    <div>
      <h1>Owen Wilson`s "wow"</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                movieFilter={movieFilter}
                yearFilter={yearFilter}
                handleChangeMovie={handleChangeMovie}
                handleChangeYear={handleChangeYear}
                years={getYears()}
              />{' '}
              <MovieList
                movieFilter={movieFilter}
                yearFilter={yearFilter}
                movies={movies}
              />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <MovieDetail movie={movieDetail === undefined ? {} : movieDetail} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
