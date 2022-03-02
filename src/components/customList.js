import * as React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { list } from "../assets/styles/BaseStyles";
import DATA from "../assets/data/List"

class customList extends React.Component {
  renderItem = ({ item }) => {
    return (
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
    );
  }

  render() {
    const { DATA } = this.props;
    return (
      <FlatList
        data={DATA}
        renderItem={this.renderItem} >
      </FlatList>
    )
  }
}

export default customList;