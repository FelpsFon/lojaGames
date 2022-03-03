import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import BaseStyles, { buttons } from '../assets/styles/BaseStyles';

class CustomButton extends React.Component {
  render() {
    const { title, navigation, screen } = this.props;
    return (
      <View style={BaseStyles.mainContainer}>
        <TouchableOpacity
          style={buttons.flatButton}
          onPress={() => navigation.navigate(screen)} >
          <Text style={buttons.flatButtonText}>
            {`${title}`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomButton;