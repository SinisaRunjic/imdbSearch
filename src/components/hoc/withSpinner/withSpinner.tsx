import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { IwithSpinnerProps } from "./interface";
import useStyles from "./withSpinner.styles";

const withSpinner =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & IwithSpinnerProps> =>
  ({ loading, ...props }: IwithSpinnerProps) => {
    const classes = useStyles();
    return loading ? (
      <Grid className={classes.container}>
        <Grid className={classes.spinnerContainer}>
          <CircularProgress className={classes.spinner} />
        </Grid>
        <Grid className={classes.importComponent}>
          <Component {...(props as P)} />
        </Grid>
      </Grid>
    ) : (
      <Component {...(props as P)} />
    );
  };

export default withSpinner;
