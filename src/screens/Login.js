import * as React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import BaseStyles, { label } from '../assets/styles/BaseStyles';
import CustomIcon from '../components/CustomIcon';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
  return (
    <View style={BaseStyles.mainContainer}>
      <KeyboardAvoidingView
        enabled={false}
        behavior={'height'}
        style={{ flex: 3 }}
      >
        <View style={{ marginVertical: 25, flex: 1 }}>
          <CustomIcon />
        </View>
        <View style={{ padding: 20, flex: 1 }}>
          <Text style={label.labelMedium}>
            {`Insira abaixo seu login:`}
          </Text>
          <TextInput
            style={BaseStyles.inputText}
            placeholder='E-mail'
            placeholderTextColor={'#A0A0A0'}
            onChangeText={text => this.onChangeText(text)}
          />
          <TextInput
            style={BaseStyles.inputText}
            placeholder='Senha'
            placeholderTextColor={'#A0A0A0'}
            secureTextEntry
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