import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SimpleCard from "../SimpleCard";

interface IUser {
  _id: string;
  name: string;
  address: string;
  email: string;
}

interface IProps {
  users: IUser[]
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
  const { users } = props
  return (
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

export default UserDetails;