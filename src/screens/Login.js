import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

const Login = () => {
  return (
    <View>
      <View>
        <Text>
          {'Teste'}
        </Text>
        <TextInput
          placeholder='email'
        />
        <TextInput
          placeholder='senha'
        />
      </View>
    </View>
  )
}

export default Login;