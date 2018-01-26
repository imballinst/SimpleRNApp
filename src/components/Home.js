import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

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
});

class Home extends React.Component {
  onIncrement = () => {
    //
  }

  onDecrement = () => {
    //
  }

  onReset = () => {
    //
  }

  onLogout = () => {
    //
  }

  onPressDetailView = () => {
    //
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <NumberButtons
          num={1}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onReset={this.onReset}
        />

        <NumberButtons
          num={2}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onReset={this.onReset}
        />

        <NumberButtons
          num={3}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onReset={this.onReset}
        />

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
  //
};

export default Home;
