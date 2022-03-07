import * as React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import BaseStyles, { buttons, colors } from '../assets/styles/BaseStyles';

class CustomButton extends React.Component {
  render() {
    const { title, navigation, screen } = this.props;
    return (
      <View style={BaseStyles.mainContainer}>
        <TouchableHighlight
          style={buttons.raisedButton}
          activeOpacity={0.6}
          underlayColor={colors.blue700}
          onPress={() => navigation.navigate(screen)} >
          <Text style={buttons.raisedButtonText}>
            {`${title}`}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CustomButton;