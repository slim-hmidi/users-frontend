import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserCard from "./UserCard";
import { IUser } from "../../redux/types/user.interfaces";
import { fetchUsersRequest } from "../../redux/actions/user"
import { IAppState } from "../../redux/reducers/index";
import { filteredUsers } from "../../redux/selectors/user"

interface IProps {
  error: string;
  users: IUser[],
  fetchUsersRequest: () => void,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      margin: theme.spacing(1)
    },
    notFound: {
      margin: '0 auto',
    },
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
      users && users.length ? users.map((user: IUser) => {
        return (
          <Grid
            key={user._id}
            item
            className={classes.item}
          >
            <UserCard user={user} >
              <Typography variant="h6"
                noWrap>{user.address}</Typography>
              <Typography variant="h6" noWrap>{user.email}</Typography>
            </UserCard>
          </Grid>
        )
      })
        :
        <Grid className={classes.notFound}>
          <Typography variant="h5">No users found</Typography>
        </Grid>

  )
}

const mapStateToProps = (state: IAppState) => ({
  users: filteredUsers(state.user.searchField)(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUsersRequest: () => dispatch<any>(fetchUsersRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);