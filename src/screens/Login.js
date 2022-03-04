import * as React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import BaseStyles, { label, title } from '../assets/styles/BaseStyles';
import CustomBackground from '../components/CustomBackground';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
  return (
    <View style={BaseStyles.mainContainer}>
      <KeyboardAvoidingView
        enabled={false}
        behavior={'height'}
        style={{ flex: 3 }}
      >
        <View style={{ flex: 1 }}>
          <Text style={title}>
            {`Mercadinho dos Games`}
          </Text>
          <CustomBackground />
        </View>
        <View style={{ marginHorizontal: 25, flex: 1 }}>
          <Text style={label.labelMedium}>
            {`Insira abaixo seu login:`}
          </Text>
          <TextInput
            style={BaseStyles.inputText}
            placeholder='E-mail'
            placeholderTextColor={'#A0A0A0'}
          />
          <TextInput
            style={BaseStyles.inputText}
            placeholder='Senha'
            placeholderTextColor={'#A0A0A0'}
            maxLength={20}
          />
        </View>
        <View style={{ padding: 4, flex: 1 }}>
          <CustomButton
            title="Login" screen="Home" navigation={navigation}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login;