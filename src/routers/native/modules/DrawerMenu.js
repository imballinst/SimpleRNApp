import React from 'react';
import PropTypes from 'prop-types';

import NavbarItem from './NavbarItem';

class DrawerMenu extends React.Component {
  onDrawerNavigate = () => {
    const { navigation } = this.props;
    const drawerAction = navigation.state.index === 0 ? 'DrawerOpen' : 'DrawerClose';

    navigation.navigate(drawerAction);
  }

  render() {
    return (
      <NavbarItem
        iconName="bars"
        onPress={this.onDrawerNavigate}
      />
    );
  }
}

DrawerMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DrawerMenu;
