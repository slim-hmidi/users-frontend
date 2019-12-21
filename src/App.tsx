import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import UserDetails from "./components/User/UserDetails";
import SearchField from "./components/User/SearchField";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    item: {
      margin: theme.spacing(4)
    },
    search: {
      marginTop: theme.spacing(4),
      margin: '0 auto',
      width: '30%'
    }
  }),
);

const App = () => {
  // const [searchField, setSeachField] = useState('');
  // const debounceOnChange = useCallback(debounce(handleChange, 300), []);

  const classes = useStyles();

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
          <Grid container alignContent="space-between">
            <UserDetails />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
