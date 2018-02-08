import { connect } from 'react-redux';
import { login, refreshLoginView } from '../actions/auth';
import Login from '../components/Login';

const mapStateToProps = ({ auth }) => {
  const { message, isError, username } = auth;

  return {
    isError,
    message,
    username,
  };
};
const mapDispatchToProps = { login, refreshLoginView };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
