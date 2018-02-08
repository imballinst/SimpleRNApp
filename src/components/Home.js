import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Button, Text } from 'react-native';

import NumberButtons from './modules/NumberButtons';

const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#c1c3c8',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: '16.5%',
    height: '100%',
  },
  titleviewStyle: {
    marginBottom: 30,
  },
  titleTextStyle: {
    fontSize: 24,
  },
});

class Home extends React.Component {
  onModifyCounter = (id, type, currentVal) => () => {
    const {
      increment,
      decrement,
      reset,
    } = this.props;
    const dispatcher = {
      increment,
      decrement,
      reset,
    };

    dispatcher[type](id, currentVal);
  }

  onPressDetailView = () => {
    this.props.navigation.navigate('Detail');
  }

  onLogout = () => {
    this.props.logout();
  }

  render() {
    const { counter, username } = this.props;
    const groupNumberButtons = counter.map(({ id, val, sync }) => (
      <NumberButtons
        key={`numbtns-${id + 1}`}
        id={id}
        num={val}
        sync={sync}
        onModifyCounter={this.onModifyCounter}
      />
    ));

    return (
      <View style={style.viewStyle}>
        <View style={style.titleViewStyle}>
          <Text style={style.titleTextStyle}>Hi, {username}!</Text>
        </View>

        {groupNumberButtons}

        <View style={{ marginTop: 30 }}>
          <Button onPress={this.onPressDetailView} title="Detail View" />
        </View>

        <View style={{ marginTop: 30 }}>
          <Button color="#ff0000" onPress={this.onLogout} title="Logout" />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  counter: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

export default Home;
