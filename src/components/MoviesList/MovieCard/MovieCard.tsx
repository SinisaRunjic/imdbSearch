import { FC } from "react";
import { IMovie } from "./interface";
import { Grid } from "@material-ui/core";
import useStyles from "./MovieCard.styles";
import DisplayText from "components/DisplayText";

const MovieCard: FC<IMovie> = ({
  description,
  id,
  image,
  resultType,
  title,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.movieCardContainer}
    >
      <Grid item className={classes.textMargin}>
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
      <Grid item component="img" src={image} width="120" height="189" />
    </Grid>
  );
};

export default MovieCard;
