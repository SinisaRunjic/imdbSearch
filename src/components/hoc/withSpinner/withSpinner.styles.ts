import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    width: "100%",
    cursor: "wait",
  },
  spinnerContainer: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    zIndex: 4,
    width: "100%",
    height: "100%",
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  importComponent: {
    overflow: "hidden",
    opacity: 0.35,
  },
}));

export default useStyles;
