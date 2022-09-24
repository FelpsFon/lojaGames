import * as React from 'react';
import { View, Text } from 'react-native';
import BaseStyles, { list } from '../assets/styles/BaseStyles';
import CustomButton from '../components/CustomButton';
import CustomList from '../components/CustomList';
import CustomIcon from '../components/CustomIcon';

class Home extends React.Component {
  render(){
  return (
    <View style={BaseStyles.mainContainer}>
    <View style={{ marginVertical: 25, flex: 1 }}>
      <CustomIcon />
    </View>
      <View style={list.customListView}>
        <CustomList data={DATA} navigation={this.props.navigation} />
      </View>
      <View style={{ flex: 1 }}>
        <CustomButton
          title="Fazer Login" screen="Login" navigation={this.props.navigation}
        />
      </View>
      <View style={{ flex: 1 }}>
        <CustomButton
          title="Sobre Nós" screen="About" navigation={this.props.navigation}
        />
      </View>
      <View>
        <Text>
          {`Oi Inoue`}
        </Text>
      </View>
    </View>
    )
  }
}

const DATA = [
  {
    id: '1',
    title: 'DARK SOULS™: REMASTERED',
    price: 'R$ 129,90',
    url: 'https://upload.wikimedia.org/wikipedia/pt/7/7c/Dark_Souls_1_capa.png',
  },
  {
    id: '2',
    title: 'Minecraft',
    price: 'R$59,99',
    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Minecraft_capa.png/260px-Minecraft_capa.png',
  },
  {
    id: '3',
    title: 'Terraria',
    price: 'R$ 19,99',
    url: 'https://s2.glbimg.com/lZhn5N5Om6bJs_Y9FNLhehvaKl4=/0x0:695x521/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/J/o/vIaLg5TFSs08OaoiR6eA/2014-12-08-terraria.png',
  },
  {
    id: '4',
    title: 'Red Dead Redemption 2',
    price: 'R$ 239,00',
    url: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
  },
  {
    id: '5',
    title: 'Gran Turismo 7',
    price: 'R$ 349,90',
    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Gran_Turismo_7_capa.png/270px-Gran_Turismo_7_capa.png',
  },
  {
    id: '6',
    title: 'ELDEN RING',
    price: 'R$ 249,90',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1646406355',
  },
  {
    id: '7',
    title: 'Rain World',
    price: 'R$ 36,99',
    url: 'https://cdn-products.eneba.com/resized-products/mxaffT3mS-4HM5CmdDad7pvwsg4H3xDsI028ZychY_4_350x200_3x-0.jpeg',
  },
  {
    id: '8',
    title: 'Outer Wilds',
    price: 'R$ 47,49',
    url: 'https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304',
  },
  {
    id: '9',
    title: 'Cyberpunk 2077',
    price: 'R$ 199,90',
    url: 'https://sm.ign.com/ign_br/game/c/cyberpunk-/cyberpunk-2077_tdqt.jpg',
  },
  {
    id: '10',
    title: 'Metro Exodus',
    price: 'R$ 56,00',
    url: 'https://cdn1.epicgames.com/salesEvent/salesEvent/MetroExodus-PCEnhancedEdition_S2_1200x1600-64a550825c1427140460cc3a86cafdb5',
  },
  {
    id: '11',
    title: 'Amnesia: Rebirth',
    price: 'R$ 57,99',
    url: 'https://cdn1.epicgames.com/b2df9b20c72446d690718965da41c7ad/offer/EGS_AmnesiaRebirth_FrictionalGames_S2-1200x1600-06261861317a4d878f0391cbcf127a5a.jpg',
  },
  {
    id: '12',
    title: 'God of War',
    price: 'R$ 199,90',
    url: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
  },
  {
    id: '13',
    title: 'Dying Light 2 Stay Human',
    price: 'R$ 249,00',
    url: 'https://image.api.playstation.com/vulcan/img/rnd/202106/2908/7aJhOMuJALdBPqZHVy3CgJsg.png',
  },
  {
    id: '14',
    title: 'Horizon Zero Dawn™',
    price: 'R$ 199,90',
    url: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/vC7trMorHJgbImp8PCQvpI0p.png',
  },
  {
    id: '15',
    title: 'Hollow Knight',
    price: 'R$ 62,50',
    url: 'https://image.api.playstation.com/cdn/UP1822/CUSA13632_00/GuFQKWlrIVODEA1su20fCOrNZEYX5CB9.png',
  },
  {
    id: '16',
    title: 'Danganronpa',
    price: 'Free',
    url: 'https://d3fd5j8wprxn3h.cloudfront.net/wp-content/uploads/2022/01/Danganronpa-Trigger-Happy-Havoc-Xbox-Game-Pass.jpg',
  },
];

export default Home;