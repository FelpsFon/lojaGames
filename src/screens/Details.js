import * as React from 'react';
import { View, Text } from 'react-native';
import BaseStyles, { title } from '../assets/styles/BaseStyles';

const Details = () => {
  return (
    <View style={BaseStyles.mainContainer}>
      <Text style={title}>
        {`TesteDetails`}
      </Text>
    </View>
  );
};

export default Details;