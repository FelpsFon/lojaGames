import * as React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { headerComponentStyle, title } from '../assets/styles/BaseStyles';
import * as Animatable from 'react-native-animatable';

class CustomIcon extends React.Component {
  render() {
    return (
      <View>
        <Animatable.View animation={"fadeInLeft"}>
          <Text style={title}>
            {`Mercadinho dos Games`}
          </Text>
        </Animatable.View>
        <Animatable.View animation={"fadeInRight"}>
          <ImageBackground
            style={headerComponentStyle.backImage}
            source={{ uri: 'https://images.vexels.com/media/users/3/215356/isolated/lists/7c6f4b5d275927d3dec64f6bb49f1e71-joystick-plano-de-controle-de-jogos.png' }}
            resizeMode='contain'>
          </ImageBackground>
        </Animatable.View>
      </View>
    )
  }
}

export default CustomIcon;