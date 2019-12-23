import { Dispatch } from "redux";
import { createRequest } from "../../redux/actions/user";

export interface IUserValues {
  address: string;
  name: string;
  email: string;
}

interface IError {
  name?: string;
  email?: string;
}
const validate = (values: IUserValues) => {
  const errors: IError = {};
  const { name, email } = values;
  if (!name) {
    errors.name = "Required";
  }
  if (!email) {
    errors.email = "Required";
  }
  // Check the email's format
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const submit = (values: IUserValues, dispatch: Dispatch) => {
  const user = {
    email: values.email,
    name: values.name,
    address: values.address,
  };

  console.log(user)

  return dispatch<any>(createRequest(user));
};

export { validate, submit };
