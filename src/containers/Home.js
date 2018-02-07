import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { increment, decrement, reset } from '../actions/counter';
import Home from '../components/Home';

const mapStateToProps = ({ counter, auth }) => ({
  counter,
  username: auth.username,
});
const mapDispatchToProps = {
  logout, increment, decrement, reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
