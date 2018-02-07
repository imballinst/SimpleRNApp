import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Login from '../components/Login';

const mapStateToProps = () => ({});
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
