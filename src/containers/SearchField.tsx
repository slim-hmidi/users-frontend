import React from "react";
import { Dispatch } from "redux"
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { searchUser } from "../redux/actions/user";
import { IAppState } from "../redux/reducers";

interface IProps {
  searchField?: string;
  searchUser: (value: string) => void;
}
const SearchField = (props: IProps) => {
  const { searchField, searchUser } = props;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    searchUser(e.target.value);
  }
  return (
    <TextField
      variant="outlined"
      label="Search"
      color="secondary"
      value={searchField}
      onChange={handleChange}
      fullWidth
    />
  )
}

const mapStateToProps = (state: IAppState) => {
  const { searchField } = state.user;
  return {
    searchField
  };
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    searchUser: (value: string) => dispatch<any>(searchUser(value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchField);