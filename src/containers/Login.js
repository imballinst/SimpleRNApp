import { connect } from 'react-redux';
import { login, refreshLoginView } from '../actions/auth';
import Login from '../components/Login';

const mapStateToProps = ({ auth }) => ({ isError: auth.isError, message: auth.message });
const mapDispatchToProps = { login, refreshLoginView };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
