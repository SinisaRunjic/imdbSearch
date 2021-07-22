import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  movieCardContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    margin: theme.spacing(1, 0, 0.5, 0),
  },
  textMargin: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
