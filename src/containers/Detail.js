import { connect } from 'react-redux';
import Detail from '../components/Detail';

const mapStateToProps = ({ nav }) => ({ nav });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
