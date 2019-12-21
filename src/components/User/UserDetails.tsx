import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SimpleCard from "../SimpleCard";
import { IUser } from "../../redux/types/user.types";
import { fetchUsersRequest } from "../../redux/actions/user"
import { IAppState } from "../../redux/reducers/index";
import { filteredUsers } from "../../redux/selectors/user"

interface IProps {
  error: string;
  users: IUser[],
  fetchUsersRequest: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: '0 auto',
      width: '50%'
    },
    item: {
      margin: theme.spacing(4)
    }
  }),
);
const UserDetails: any = (props: IProps) => {
  const classes = useStyles();
  const { error, users, fetchUsersRequest } = props

  useEffect(() => {
    fetchUsersRequest()
  }, [fetchUsersRequest])
  return (
    error
      ?
      (
        <Grid container direction="column" justify="center" >
          <Grid item className={classes.item}><Typography variant="h4">An error occurs while loading users' list</Typography></Grid>
          <Grid item className={classes.item}><img src="https://i.imgur.com/yW2W9SC.png" alt="broken_page" /></Grid>
        </Grid >)
      :
      users.map((user: IUser) => {
        return (
          <Grid key={user._id} item className={classes.item}>
            <SimpleCard title={user.name}>
              <Typography variant="h6">{user.address}</Typography>
              <Typography variant="h6">{user.email}</Typography>
            </SimpleCard>
          </Grid>
        )
      })
  )
}

const mapStateToProps = (state: IAppState) => ({
  users: filteredUsers(state.user.searchField)(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUsersRequest: () => dispatch<any>(fetchUsersRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);