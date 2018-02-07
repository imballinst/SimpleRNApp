import React from 'react';
import PropTypes from 'prop-types';
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
  state = { username: '', password: '' }

  onChange = type => (text) => {
    this.setState({
      [`${type}`]: text,
    });
  }

  onPress = () => {
    const { login } = this.props;
    const { username, password } = this.state;

    login(username, password);
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
            onChangeText={(this.onChange('username'))}
          />
          <TextInput
            placeholder="Password"
            style={style.textInput}
            onChangeText={this.onChange('password')}
          />
          <Button
            color="#588bd4"
            onPress={this.onPress}
            title="Login"
          />
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
