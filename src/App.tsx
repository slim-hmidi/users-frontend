import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import UserDetails from "./components/User/UserDetails";
import Typography from "@material-ui/core/Typography"
import { fetchUsers, search } from "./apis/users";
import { debounce } from "./utils/helpers";


interface IUser {
  name: string;
  email: string;
  address: string;
}

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

const App: React.FC = () => {
  const [users, setUsers] = useState([])
  const [searchField, setSeachField] = useState('');
  const [error, setError] = useState(false)
  const debounceOnChange = useCallback(debounce(handleChange, 400), []);

  const classes = useStyles();

  useEffect(() => {
    fetchUsers()
      .then(response => {
        const { data } = response;
        setUsers(data)
      })
      .catch(error => setError(true))
  }, [])

  function handleChange(value: string) {
    setSeachField(value);
    search(value)
      .then(response => setUsers(response.data))

  }

  return (
    <div className={classes.root}>
      <Grid container
        direction="column"
        spacing={3}
      >
        <Grid item className={classes.search}>
          <TextField
            label="Search User(s)"
            value={searchField}
            onChange={(e) => debounceOnChange(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item className={classes.item}>
          {
            error ?
              (
                <Grid container direction="column" justify="center">
                  <Grid item className={classes.item}><Typography variant="h4">An error occurs while loading users' list</Typography></Grid>
                  <Grid item className={classes.item}><img src="https://i.imgur.com/yW2W9SC.png" alt="broken_page" /></Grid>
                </Grid>)
              :
              <Grid container alignContent="space-between">
                <UserDetails users={users} />
              </Grid>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
