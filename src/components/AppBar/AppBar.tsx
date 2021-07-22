import {
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./AppBar.styles";

const AppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MUIAppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            IMBD search
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </MUIAppBar>
    </div>
  );
};

export default AppBar;
