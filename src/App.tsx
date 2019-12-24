import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab"
import Grid from "@material-ui/core/Grid";
import UserDetails from "./containers/user/UserDetails";
import SearchField from "./containers/SearchField";
import history from "./history";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden'
    },
    item: {
      margin: theme.spacing(4)
    },
    search: {
      marginTop: theme.spacing(4),
      margin: '0 auto',
      width: '30%'
    },
    fab: {
      position: 'fixed',
      right: '4px',
      bottom: '4px'
    }
  }),
);

const App = () => {
  const classes = useStyles();

  const handleFabClick = () => {
    history.push('/createUser')
  }
  return (
    <div className={classes.root}>
      <Grid container
        direction="column"
        spacing={3}
      >
        <Grid item className={classes.search}>
          <SearchField />
        </Grid>
        <Grid item className={classes.item}>
          <Grid container alignContent="stretch">
            <UserDetails />
          </Grid>
        </Grid>
        <Grid>
          <Fab
            size="large"
            color="secondary"
            className={classes.fab}
            onClick={handleFabClick}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
