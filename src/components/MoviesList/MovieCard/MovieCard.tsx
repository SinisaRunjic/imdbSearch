import { FC, useState } from "react";
import { IMovie } from "./interface";
import { Grid, Tooltip } from "@material-ui/core";
import useStyles from "./MovieCard.styles";
import DisplayText from "components/DisplayText";
import MovieDetails from "./MovieDetails";
import { getMovieById } from "api";
import { IMovieDetails } from "./MovieDetails/interface";
import Error from 'components/Error'

const MovieCard: FC<IMovie> = ({
  description,
  id,
  image,
  title,
}) => {
  const classes = useStyles();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>({
    title: "",
    actorList: [],
    image: "",
    ratings: { imDb: "", rottenTomatoes: "", theMovieDb:"" },
  });

  const showMovieDetails = async () => {
    setShowDetails(true);
    setLoading(true);
    try {
      const movieDet = await getMovieById(id);
      setMovieDetails(movieDet.data);
    } catch(error) {
      setError(true)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container direction="column">
      <Tooltip
        title="Show Details"
        className={classes.tooltip}
        onClick={showMovieDetails}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.movieCardContainer}
          onClick={showMovieDetails}
        >
          <Grid item xs={8} className={classes.textMargin}>
            <Grid container direction="column">
              <Grid item>
                <DisplayText> Air date: {description} </DisplayText>
              </Grid>
              <Grid item>
                <DisplayText> Id: {id} </DisplayText>
              </Grid>
              <Grid item>
                <DisplayText>Title: {`"${title}"`}</DisplayText>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4} item component="img" src={image}/>
        </Grid>
      </Tooltip>
      {showDetails &&(error ? <Error/>:<MovieDetails loading={loading} {...movieDetails} /> )}
    </Grid>
  );
};

export default MovieCard;
