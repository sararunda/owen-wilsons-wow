import '../styles/App.scss';
import getApiData from '../service/fetch';
import { useEffect, useState } from 'react';

function App() {
  //states variables
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getApiData().then((dataClean) => {
      console.log(dataClean);
      setMovies(dataClean);
    });
  }, []);

  return (
    <div>
      <h1>hola mundo</h1>
    </div>
  );
}

export default App;
