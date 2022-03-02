import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import BaseStyles from '../assets/styles/BaseStyles';

const Login = () => {
  return (
    <View style={BaseStyles.mainContainer}>
      <View>
        <Text>
          {`Teste`}
        </Text>
        <TextInput
          style={BaseStyles.inputText}
          placeholder='email'
        />
        <TextInput
          style={BaseStyles.inputText}
          placeholder='senha'
        />
      </View>
    </View>
  )
}

export default Login;