import React, { useCallback } from "react";
import { Dispatch } from "redux"
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { searchUser } from "../../redux/actions/user";
import { debounce } from "../../utils/helpers";
import { IAppState } from "../../redux/reducers";

interface IProps {
  searchField?: string;
  searchUser: (value: string) => void;
}
const SearchField = (props: IProps) => {
  const { searchField, searchUser } = props;
  const debounceOnChange = useCallback(debounce(handleChange, 300), []);
  function handleChange(value: string) {
    searchUser(value);
  }
  return (
    <TextField
      variant="outlined"
      label="Search"
      value={searchField}
      onChange={(e) => debounceOnChange(e.target.value)}
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