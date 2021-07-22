import { FC } from "react";
import { Grid } from "@material-ui/core";
import withSpinner from "components/hoc/withSpinner";
import { IMovieDetails } from "./interface";
import DisplayText from "components/DisplayText";
import useStyles from "./MovieDetails.styles";

const MovieDetails: FC<IMovieDetails> = ({
  title,
  image,
  actorList,
  ratings,
}) => {
  const classes = useStyles()
  return (
    <Grid
    container
    direction="row"
    alignItems="center"
    className={classes.movieDetailsContainer}
  >
    <Grid item xs={8}>
      <Grid container direction="column">
        <Grid item>
          <DisplayText> Actors: {actorList.map(actor=> `${actor.name}, `)} </DisplayText>
        </Grid>
        <Grid item>
          <DisplayText>Ratings: IMDB:{ratings.imDb} rottenTomatoes:{ratings.rottenTomatoes} theMovieDb:{ratings.theMovieDb} </DisplayText>
        </Grid>
        <Grid item>
          <DisplayText>Title: {`"${title}"`}</DisplayText>
        </Grid>
      </Grid>
    </Grid>
    <Grid xs={4} item component="img" src={image} />
  </Grid>
  );
};

export default withSpinner(MovieDetails);
