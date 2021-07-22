import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  movieDetailsContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
  }
}));

export default useStyles;
