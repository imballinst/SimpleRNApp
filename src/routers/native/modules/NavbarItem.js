import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavbarItem = ({ iconName, onPress }) => (
  <TouchableOpacity
    style={{ paddingHorizontal: 20 }}
    onPress={onPress}
  >
    <Icon name={iconName} size={20} color="#fff" />
  </TouchableOpacity>
);

NavbarItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default NavbarItem;
