import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IUser } from '../../redux/types/user.interfaces';
import { deleteRequest } from "../../redux/actions/user"
import history from "../../history";


interface IProps {
  user: IUser;
  children: React.ReactNode;
  deleteRequest: (id: string) => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '345px',
      height: '250px',
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
    },
    typography: {
      width: '50px'
    }
  }),
);

const RecipeReviewCard = (props: IProps) => {
  const classes = useStyles();
  const { children, deleteRequest, user } = props;

  const handleDelete = () => {
    deleteRequest(user._id)
  }
  const handleEdit = () => {
    history.push(`/updateUser/${user._id}`);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {user.name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <div>
            <IconButton
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          </div>
        }
        title={user.name}
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>

  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteRequest: (id: string) => dispatch<any>(deleteRequest(id))
})

export default connect(null, mapDispatchToProps)(RecipeReviewCard);
