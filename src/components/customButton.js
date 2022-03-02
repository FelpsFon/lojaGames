import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import BaseStyles, { buttons } from '../assets/styles/BaseStyles';

class CustomButton extends React.Component {
  render() {
    const { navigation, screen, title } = this.props;
    return (
      <View style={BaseStyles.mainContainer}>
        <TouchableOpacity
          style={buttons.raisedButton}
          onPress={() => navigation.navigate(screen)} >
          <Text>
            {`${title}`}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CustomButton;