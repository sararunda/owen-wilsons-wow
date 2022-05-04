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

  return (
    <div>
      <h1>Owen Wilson`s "wow"</h1>
      <Filters
        movieFilter={movieFilter}
        handleChangeMovie={handleChangeMovie}
      />
      <MovieList movieFilter={movieFilter} movies={movies} />
    </div>
  );
}

export default App;
