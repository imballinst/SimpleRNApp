import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { NavigationActions, StackNavigator, addNavigationHelpers } from 'react-navigation';
import Login from '../containers/Login';
import Drawer from './native/Drawer';

const AppNavigator = StackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Drawer: { screen: Drawer },
});

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }

    const screenKeyBefore = nav.routes[nav.routes.length - 2].routeName;
    dispatch(NavigationActions.navigate({ routeName: screenKeyBefore }));

    return true;
  }

  render() {
    const { dispatch, nav } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = ({ nav }) => ({ nav });

export { AppNavigator };
export default connect(mapStateToProps)(AppWithNavigationState);
