import { FC, useEffect, useState, Fragment } from "react";
import { getMoviesByTitles } from "api";
import AppBar from "components/AppBar";
import MoviesList from "components/MoviesList";
import { IMovie } from "components/MoviesList/MovieCard/interface";

const Home: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLaoding] = useState(true);

  useEffect(() => {
    // this code is just for testing
    async function fetchMyAPI() {
      try {
        let response = await getMoviesByTitles("aveng");
        setMovies(response.data.results);
      } catch {
      } finally {
        setLaoding(false);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <Fragment>
      <AppBar />
      <MoviesList movies={movies} loading={loading} />
    </Fragment>
  );
};
export default Home;
