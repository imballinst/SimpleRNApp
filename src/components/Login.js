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
  textProcessMessage: {
    color: '#0000ff',
  },
  textErrorMessage: {
    color: '#ff0000',
  },
});

class Login extends React.Component {
  state = { username: '', password: '' }

  componentDidMount() {
    this.props.refreshLoginView();
  }

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
    const { message, isError } = this.props;
    const textMessageStyle = isError ? style.textErrorMessage : style.textProcessMessage;

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
          <Text style={textMessageStyle}>{message}</Text>
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
  isError: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  refreshLoginView: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
