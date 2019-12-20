import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface IProps {
  title: string;
  children: React.ReactNode;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '100%',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const RecipeReviewCard = (props: IProps) => {
  const classes = useStyles();
  const { title, children } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {title[0].toUpperCase()}
          </Avatar>
        }
        action={
          <div>
            <IconButton aria-label="settings">
              <DeleteIcon />
            </IconButton>

            <IconButton aria-label="settings">
              <EditIcon />
            </IconButton>
          </div>
        }
        title={title}
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>

  );
}


export default RecipeReviewCard;
