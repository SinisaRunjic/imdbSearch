import { FC, useState, Fragment, KeyboardEvent } from "react";
import { getMoviesByTitles } from "api";
import AppBar from "components/AppBar";
import MoviesList from "components/MoviesList";
import { IMovie } from "components/MoviesList/MovieCard/interface";
import Error from 'components/Error'

const Home: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState(false)

  const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setError(false)
      setLaoding(true)
      try {
        const response = await getMoviesByTitles(event.currentTarget.value);
        setMovies(response.data.results);
      } catch(err) {
        setError(true)
      } finally {
        setLaoding(false);
      }
    }
  };

  return (
    <Fragment>
      <AppBar handleKeyPress={handleKeyPress} />
      {error ? <Error /> : <MoviesList movies={movies} loading={loading} />}
    </Fragment>
  );
};
export default Home;
