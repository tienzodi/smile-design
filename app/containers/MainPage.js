import { connect } from 'react-redux';
import MainPage from '../components/MainPage/index';

// Redux connection
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
