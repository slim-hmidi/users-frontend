import { Dispatch } from "redux";
import { createRequest, updateRequest } from "../../redux/actions/user";


export interface IValues {
  address: string;
  name: string;
  email: string;
  [key: string]: string
}

interface IError {
  name?: string;
  email?: string;
}
const validate = (values: {
  name: string;
  email: string;
  address: string;
}) => {
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

const submit = (values: IValues, dispatch: Dispatch) => {
  const user = {
    email: values.email,
    name: values.name,
    address: values.address,
  };

  return dispatch<any>(createRequest(user));
};


export const updateSubmit = (values: IValues, dispatch: Dispatch, { ...props }) => {
  const { userId } = props.match.params;
  let user;
  user = Object.keys(values)
    .filter((k: string) => values[k])
    .reduce((acc: any, curr) => {
      acc[curr] = values[curr];
      return acc;
    }, {});

  Object.assign(user, { _id: userId })
  return dispatch<any>(updateRequest(user));
};

export { validate, submit };
