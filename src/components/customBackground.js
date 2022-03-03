import * as React from 'react';
import { ImageBackground } from 'react-native';
import { headerComponentStyle } from '../assets/styles/BaseStyles';

class CustomBackground extends React.Component {
  render() {
    return (
      <ImageBackground
        style={ headerComponentStyle.backImage }
        source={{ uri: 'https://northshoppingbarretos.com.br/wp-content/uploads/2020/03/TOR49318-min.jpg' }}
        resizeMode='contain'>
      </ImageBackground>
    )
  }
}

export default CustomBackground;