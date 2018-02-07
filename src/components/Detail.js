import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#c1c3c8',
    flex: 1,
    paddingHorizontal: '16.5%',
    height: '100%',
  },
});

class Detail extends React.Component {
  onPressBack = () => {
    this.props.navigation.navigate(NavigationActions.navigate({ routeName: 'Home' }));
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <Text>This is Detail View, but it doesn&apos;t appear in Drawer</Text>

        <Button onPress={this.onPressBack} title="Back" />
      </View>
    );
  }
}

Detail.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Detail;
