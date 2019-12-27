import React from "react";
import { reduxForm } from "redux-form";
import CommonForm from "./CommonForm";
import { submit, validate } from "./submit";


const CreateForm = (props: any) => {
  return (
    <CommonForm title="New User" buttonLabel="Create User" {...props} />
  )
}
const CreateUserForm = reduxForm({
  form: "CreateUser",
  onSubmit: submit,
  validate
})(CreateForm);

export default CreateUserForm;