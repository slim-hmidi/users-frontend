import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import CommonForm from "./CommonForm";

import { updateSubmit, validate } from "./submit";
import { IAppState } from "../../redux/reducers";
import { selectedUser } from "../../redux/selectors/user";


const UpdateUser = (props: any) => {
  return (
    <CommonForm title="Update User" buttonLabel="Update user" {...props} />
  )
}

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
