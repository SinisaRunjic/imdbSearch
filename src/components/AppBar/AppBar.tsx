import { FC } from "react";
import {
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  InputBase,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./AppBar.styles";
import { IAppBar } from "./interface";

const AppBar: FC<IAppBar> = ({handleKeyPress}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <MUIAppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            IMDB search
          </Typography>
          <Grid className={classes.search}>
            <Grid className={classes.searchIcon}>
              <SearchIcon />
            </Grid>
            <InputBase
              placeholder="Search…"
              onKeyDown={handleKeyPress}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Grid>
        </Toolbar>
      </MUIAppBar>
    </Grid>
  );
};

export default AppBar;
