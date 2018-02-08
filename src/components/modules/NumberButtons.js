import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet } from 'react-native';

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
  id, num, sync, onModifyCounter,
}) => (
  <View>
    <View>
      <Text style={style.textCenter}>{num} | {sync ? 'Sync' : 'Not sync'}</Text>
    </View>
    <View style={style.row}>
      <View style={style.flex1}>
        <Button onPress={onModifyCounter(id, 'increment', num)} title="Increment" />
      </View>
      <View style={style.flex1}>
        <Button color="#00aa00" onPress={onModifyCounter(id, 'decrement', num)} title="Decrement" />
      </View>
      <View style={style.flex1}>
        <Button color="#ff0000" onPress={onModifyCounter(id, 'reset', num)} title="Reset" />
      </View>
    </View>
  </View>
);

NumberButtons.propTypes = {
  id: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  sync: PropTypes.bool.isRequired,
  onModifyCounter: PropTypes.func.isRequired,
};

export default NumberButtons;
