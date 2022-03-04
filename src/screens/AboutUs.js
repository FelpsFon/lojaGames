import * as React from 'react';
import { View, Text } from 'react-native';
import BaseStyles, { body, subtitle, title } from '../assets/styles/BaseStyles';

const About = () => {
  return (
    <View style={BaseStyles.mainContainer}>
      <Text style={title}>
        {`Sobre Nós`}
      </Text>
      <View style={{ padding: 12 }}>
        <Text style={body.default}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis vel nisi pretium maximus. Ut posuere aliquet congue. Ut luctus dictum arcu, sed sodales ligula aliquam ac. Nullam quis magna quis libero vestibulum gravida. Suspendisse at interdum diam. Phasellus tempus ornare nunc nec faucibus. Phasellus cursus leo eget mi posuere accumsan. Duis vestibulum nulla et condimentum iaculis. Curabitur vitae nibh convallis, pretium tortor eu, lacinia elit. Phasellus sem tellus, porta in erat et, ornare facilisis lectus.`}
        </Text>
      </View>
      <View>
        <Text style={subtitle}>
          {`Contato:`}
        </Text>
        <Text style={body.small}>
          {`email@exemplo.com\n`}
          {`+55 (61) 90000-0000`}
        </Text>
      </View>
    </View>
  )
}

export default About;