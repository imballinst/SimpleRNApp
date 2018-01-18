import React from 'react';
import { View, Button, Text, TextInput, StyleSheet, Image } from 'react-native';
import loginPic from './assets/loginpic.png';

const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#c1c3c8',
    flex: 1,
    paddingHorizontal: '16.5%',
    height: '100%',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  loginImage: {
    opacity: 1,
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  loginImageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
  },
  formContainer: {
    flex: 2,
  },
  textInput: {
    padding: 5,
    marginBottom: 15,
    alignItems: 'stretch',
  },
});

class Login extends React.Component {
  onPress = () => {
    console.log('Hello world!');
  }

  render() {
    return (
      <View style={style.viewStyle}>
        <View style={style.loginImageContainer}>
          <Image source={loginPic} style={style.loginImage} />
        </View>
        <View style={style.formContainer}>
          <Text style={style.loginTitle}>Login</Text>
          <TextInput
            placeholder="Username"
            style={style.textInput}
          />
          <TextInput
            placeholder="Password"
            style={style.textInput}
          />
          <Button
            containerViewStyle={{ marginTop: 30 }}
            style={{ backgroundColor: '#588bd4' }}
            onPress={this.onPress}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  //
};

export default Login;
