import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import CardWrapper from "../../components/common/CardWrapper";
import TextField from "../../components/common/TextField";
import { updateSubmit, validate } from "./submit";
import { IAppState } from "../../redux/reducers";
import { selectedUser } from "../../redux/selectors/user";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      margin: "auto",
      maxWidth: "100%",
      padding: 16,
    },
    item: {
      marginTop: 16
    },
    paper: {
      padding: 16
    },

  })
);
const UpdateUser = ({ pristine, submitting, handleSubmit, match }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <CardWrapper
          title="SignIn Form"
          headerColor={true}>
          <Grid container justify="center" spacing={3}>
            <Grid item md={12}>
              <Field
                name="name"
                type="text"
                component={TextField}
                label="Name"
                props={{
                  fullWidth: true
                }}
                required={true}
              />
            </Grid>
            <Grid item md={12}>
              <Field
                name="email"
                type="email"
                label="Email"
                component={TextField}
                props={{
                  fullWidth: true,
                }}
                required={true}
              />
            </Grid>
            <Grid item md={12}>
              <Field
                name="address"
                type="text"
                label="Address"
                component={TextField}
                props={{
                  fullWidth: true,
                }}
                required={true}
              />
            </Grid>
            <Grid item className={classes.item}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={pristine || submitting}
              >
                Update User
              </Button>
            </Grid>
          </Grid>
        </CardWrapper>
      </form>
    </div>
  );
};

const UpdateUserForm = reduxForm({
  form: "UpdateUser",
  onSubmit: updateSubmit,
  validate
})(UpdateUser);


const mapStateToProps = (state: IAppState, ownParams: any) => {
  const userSelected = selectedUser(ownParams.match.params.userId)(state)
  let initialValues;
  if (userSelected) {
    initialValues = {
      name: userSelected.name,
      address: userSelected.address,
      email: userSelected.email
    }
  }
  return {
    initialValues
  }
}

export default connect(mapStateToProps)(UpdateUserForm);
