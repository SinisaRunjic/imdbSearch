import { FC } from "react";
import MovieCard from "./MovieCard";
import { IMovies } from "./interface";
import { Container } from "@material-ui/core";
import withSpinner from "components/hoc/withSpinner";

const MoviesList: FC<IMovies> = ({ movies }) => {
  return (
    <Container maxWidth="sm">
      {movies.length !== 0 &&
        movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Container>
  );
};

export default withSpinner(MoviesList);
