import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#c1c3c8',
    flex: 1,
    paddingHorizontal: '16.5%',
    height: '100%',
  },
});

class Detail extends React.Component {
  onPress = () => {

  }

  render() {
    return (
      <View style={style.viewStyle}>
        <Text>This is Detail View, but it doesn&apos;t appear in Drawer</Text>

        <Button onPress={this.onPress} title="Back" />
      </View>
    );
  }
}

Detail.propTypes = {
  //
};

export default Detail;
