import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerNavigator } from 'react-navigation';
import Home from '../../containers/Home';
import Detail from '../../components/Detail';
import Stub from '../../components/Stub';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions } from './utils/NavUtil';
import DrawerMenu from './modules/DrawerMenu';

const getDrawerIcon = (iconName, tintColor) => (
  <Icon name={iconName} size={20} color={tintColor} />
);

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const stubDrawerIcon = ({ tintColor }) => getDrawerIcon('table', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', '#26ba9a', 'white', homeDrawerIcon);
const stubNavOptions = getDrawerNavigationOptions('Stub', '#26ba9a', 'white', stubDrawerIcon);
const detailNavOptions = getDrawerNavigationOptions('Detail', '#26ba9a', 'white', undefined);

const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: homeNavOptions,
  },
  Stub: { screen: Stub, navigationOptions: stubNavOptions },
  Detail: {
    screen: Detail,
    navigationOptions: { ...detailNavOptions, drawerLabel: () => null },
  },
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  initialRouteName: 'Home',
});

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction(
  'TestDrawer',
  '#26ba9a',
  '#000',
  <DrawerMenu navigation={navigation} />,
);

export default Drawer;
