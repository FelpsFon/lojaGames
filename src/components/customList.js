import * as React from "react";
import { View, Text, ImageBackground, FlatList, TouchableHighlight } from "react-native";
import { list, colors } from "../assets/styles/BaseStyles";
class CustomList extends React.Component {

  pressNavigate = () => {
    //console.log("Detalhando navegação")
    this.props.navigation.navigate("Details", { screen: 'Details' })
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: colors.purpleDusk }}>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor={colors.blue700}
          style={{ borderRadius: 12 }}
          onPress={() => this.pressNavigate()} >
          <View style={list.listItem}>
            <View style={list.imageView}>
              <ImageBackground
                source={{ uri: item.url }}
                style={list.backgroundImage}
                resizeMode={'contain'} />
            </View>
            <View style={list.descriptionView}>
              <Text style={list.listItemText}>
                {`${item.title}`}
              </Text>
              <Text style={list.listItemSubtitle}>
                {`Preço: ${item.price}`}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={item => this.renderItem(item, this.props.navigation)} >
      </FlatList>
    )
  }
}

export default CustomList;