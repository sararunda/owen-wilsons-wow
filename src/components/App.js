import '../styles/App.scss';
import GetApiData from '../service/fetch';
import MovieList from './MovieList';
import { useEffect, useState } from 'react';

function App() {
  //states variables
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      setMovies(dataApi);
    });
  }, []);

  return (
    <div>
      <h1>hola mundo</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
