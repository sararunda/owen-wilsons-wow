//https://owen-wilson-wow-api.herokuapp.com/

const GetApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          id: index,
          poster: movie.poster,
          name: movie.movie,
          year: movie.year,
          director: movie.director,
          fullLine: movie.full_line,
          audio: movie.audio,
        };
      });

      return dataClean;
    });
};
export default GetApiData;
