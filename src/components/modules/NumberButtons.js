import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
});

const NumberButtons = ({
  num, onIncrement, onDecrement, onReset,
}) => (
  <View>
    <View><Text style={style.textCenter}>{num}</Text></View>
    <View style={style.row}>
      <View style={style.flex1}>
        <Button onPress={onIncrement} title="Increment" />
      </View>
      <View style={style.flex1}>
        <Button color="#00aa00" onPress={onDecrement} title="Decrement" />
      </View>
      <View style={style.flex1}>
        <Button color="#ff0000" onPress={onReset} title="Reset" />
      </View>
    </View>
  </View>
);

NumberButtons.propTypes = {
  num: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default NumberButtons;
