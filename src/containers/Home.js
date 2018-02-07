import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { increment, decrement, reset } from '../actions/counter';
import Home from '../components/Home';

const mapStateToProps = ({ nav, counter, auth }) => ({
  nav,
  counter,
  isLoggedIn: auth.isLoggedIn,
});
const mapDispatchToProps = {
  logout, increment, decrement, reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
