import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import BaseStyles, { buttons } from '../assets/styles/BaseStyles';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
  return (
    <View style={BaseStyles.mainContainer}>
      <View style={{ padding: 32 }}>
        <Text>
          {`Insira abaixo seu login:`}
        </Text>
        <TextInput
          style={BaseStyles.inputText}
          placeholder='E-mail'
        />
        <TextInput
          style={BaseStyles.inputText}
          placeholder='Senha'
        />
      </View>
      <CustomButton title="Entrar" screen="Details" navigation={navigation} />
    </View>
  )
}

export default Login;