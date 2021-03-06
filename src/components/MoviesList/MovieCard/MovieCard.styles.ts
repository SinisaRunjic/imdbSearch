import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  movieCardContainer: {
    border: `1px solid ${theme.palette.primary.main}`,
    margin: theme.spacing(1.5, 0, 0, 0),
  },
  textMargin: {
    padding: theme.spacing(1),
  },
  tooltip:{
    cursor: 'pointer'
  }
}));

export default useStyles;
