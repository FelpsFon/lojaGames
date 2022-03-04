import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import BaseStyles, { title } from '../assets/styles/BaseStyles';

const Details = () => {
  return (
    <View style={BaseStyles.mainContainer}>
      <Text style={title}>
        {`TesteDetails`}
      </Text>
      {/* <ImageBackground>
        {``}
      </ImageBackground> */}
    </View>
  );
};

const DATA = [
  {
    id: '1',
    title: 'DARK SOULS™: REMASTERED',
    price: 'R$ 129,90',
    url: 'https://upload.wikimedia.org/wikipedia/pt/7/7c/Dark_Souls_1_capa.png',
    sinopse: 'Mas então, fez-se o fogo. Experimente novamente o jogo aclamado pela crítica e definidor de gênero que foi o início tudo. Belamente remasterizado, volte a Lordran com detalhes em alta definição a 60fps. DARK SOULS: REMASTERED inclui o jogo principal e o DLC Artorias do Abismo.',
    platforms: 'PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows',
  },
  {
    id: '2',
    title: 'Minecraft',
    price: 'R$59,99',
    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Minecraft_capa.png/260px-Minecraft_capa.png',
    sinopse: 'Explore mundos gerados aleatoriamente e construa coisas incríveis, desde casas mais simples até grandiosos castelos. Jogue no modo criativo com recursos ilimitados ou minere as profundezas do mundo no modo sobrevivência, criando armas e armaduras para afastar criaturas perigosas. Escale montanhas íngremes, encontre cavernas complexas e extraia grandes veios de minério. Descubra biomas de cavernas verdejantes e com espeleotemas. Ilumine seu mundo com velas para mostrar que você sabe tudo sobre espeleologia e alpinismo!',
    platforms: 'PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows, Android, IOS',
  },
  {
    id: '3',
    title: 'Terraria',
    price: 'R$ 19,99',
    url: 'https://s2.glbimg.com/lZhn5N5Om6bJs_Y9FNLhehvaKl4=/0x0:695x521/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/J/o/vIaLg5TFSs08OaoiR6eA/2014-12-08-terraria.png',
    sinopse: 'Cave, lute, explore, construa! Nada é impossível neste jogo de aventura cheio de ação.',
    platforms: 'Android, PlayStation 4, Nintendo Switch, Xbox One',
  },
  {
    id: '4',
    title: 'Red Dead Redemption 2',
    price: 'R$ 239,00',
    url: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
    sinopse: 'Vencedor de mais de 175 prêmios de Jogo do Ano e recebedor de mais de 250 pontuações perfeitas, RDR2 é o conto épico do fora-da-lei Arthur Morgan e da infame gangue Van der Linde, em fuga pela América no início da era moderna. Também inclui acesso ao mundo vivo compartilhado de Red Dead Online.',
    platforms: 'PlayStation 4, Xbox One, Google Stadia, Microsoft Windows',
  },
  {
    id: '5',
    title: 'Gran Turismo 7',
    price: 'R$ 349,90',
    url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Gran_Turismo_7_capa.png/270px-Gran_Turismo_7_capa.png',
    sinopse: 'Seja você um piloto competitivo ou casual, colecionador, tuner, designer de visuais ou fotógrafo — encontre seu caminho com um número impressionante de modos de jogo, incluindo favoritos dos fãs como Campanha GT, Arcade e Escola de Pilotagem.',
    platforms: 'PlayStation 4, PlayStation 5',
  },
  {
    id: '6',
    title: 'ELDEN RING',
    price: 'R$ 249,90',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1646406355',
    sinopse: 'O NOVO RPG DE AÇÃO FANTASIA. Levante-se, Maculado, e seja guiado pela graça para brandir o poder do Elden Ring e se tornar um Elden Lord nas Terras Intermediárias.',
    platforms: 'PlayStation 4, Xbox Series, Xbox One, PlayStation 5, Microsoft Windows',
  },
  {
    id: '7',
    title: 'Rain World',
    price: 'R$ 36,99',
    url: 'https://cdn-products.eneba.com/resized-products/mxaffT3mS-4HM5CmdDad7pvwsg4H3xDsI028ZychY_4_350x200_3x-0.jpeg',
    sinopse: 'Você é um slugcat nômade, tanto predador quanto presa em um ecossistema quebrado. Pegue sua lança e enfrente os resíduos industriais, caçando comida suficiente para sobreviver, mas tenha cuidado - outras criaturas maiores têm o mesmo plano... e os slugcats parecem deliciosos.',
    platforms: 'PlayStation 4, Microsoft Windows, Nintendo Switch',
  },
  {
    id: '8',
    title: 'Outer Wilds',
    price: 'R$ 47,49',
    url: 'https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304',
    sinopse: 'Nomeado Jogo do Ano 2019 pela Giant Bomb, Polygon, Eurogamer e The Guardian, Outer Wilds é um mistério de mundo aberto premiado e aclamado pela crítica sobre um sistema solar preso em um loop temporal sem fim.',
    platforms: 'Nintendo Switch, PlayStation 4, Xbox One, Microsoft Windows',
  },
  {
    id: '9',
    title: 'Cyberpunk 2077',
    price: 'R$ 199,90',
    url: 'https://sm.ign.com/ign_br/game/c/cyberpunk-/cyberpunk-2077_tdqt.jpg',
    sinopse: 'Cyberpunk 2077 é um RPG de ação e aventura de mundo aberto ambientado no futuro sombrio de Night City - uma perigosa megalópole obcecada por poder, glamour e modificação corporal incessante.',
    platforms: 'Xbox Series, PlayStation 4, Xbox One, PlayStation 5, Google Stadia, Microsoft Windows',
  },
  {
    id: '10',
    title: 'Metro Exodus',
    price: 'R$ 56,00',
    url: 'https://cdn1.epicgames.com/salesEvent/salesEvent/MetroExodus-PCEnhancedEdition_S2_1200x1600-64a550825c1427140460cc3a86cafdb5',
    sinopse: 'Fuja das ruínas do metrô de Moscou e embarque em uma jornada épica pelo continente através do deserto russo pós-apocalíptico. Explore níveis vastos e não lineares, perca-se em uma experiência imersiva de sobrevivência em sandbox',
    platforms: 'Xbox Series, PlayStation 4, Xbox One, PlayStation 5, Google Stadia, Microsoft Windows',
  },
  {
    id: '11',
    title: 'Amnesia: Rebirth',
    price: 'R$ 57,99',
    url: 'https://cdn1.epicgames.com/b2df9b20c72446d690718965da41c7ad/offer/EGS_AmnesiaRebirth_FrictionalGames_S2-1200x1600-06261861317a4d878f0391cbcf127a5a.jpg',
    sinopse: 'Uma aventura de terror em primeira pessoa. Descubra seu passado e sobreviva ao deserto da Argélia. O medo é seu inimigo; fique calmo para não sucumbir a uma doença que ameaça você e seu ente querido. Evite a escuridão, esconda-se de monstros e resolva quebra-cabeças. Modo Aventura disponível para uma experiência menos assustadora.',
    platforms: 'PlayStation 4, Microsoft Windows, Linux, Mac OS',
  },
  {
    id: '12',
    title: 'God of War',
    price: 'R$ 199,90',
    url: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
    sinopse: 'Com sua vingança contra os Deuses do Olimpo anos atrás dele, Kratos agora vive como um homem no reino dos Deuses Nórdicos e monstros. É neste mundo cruel e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.',
    platforms: 'PlayStation 4, PlayStation 5, Microsoft Windows',
  },
  {
    id: '13',
    title: 'Dying Light 2 Stay Human',
    price: 'R$ 249,00',
    url: 'https://image.api.playstation.com/vulcan/img/rnd/202106/2908/7aJhOMuJALdBPqZHVy3CgJsg.png',
    sinopse: 'O vírus venceu e a civilização voltou à Idade das Trevas. A cidade, um dos últimos assentamentos humanos, está à beira do colapso. Use sua agilidade e habilidades de combate para sobreviver e remodelar o mundo. Suas escolhas importam.',
    platforms: 'Xbox Series X, PlayStation 4, Xbox One, PlayStation 5, Nintendo Switch, Microsoft Windows',
  },
  {
    id: '14',
    title: 'Horizon Zero Dawn™',
    price: 'R$ 199,90',
    url: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/vC7trMorHJgbImp8PCQvpI0p.png',
    sinopse: 'Experimente a missão lendária de Aloy para desvendar os mistérios de uma futura Terra governada por Máquinas. Use ataques táticos devastadores contra sua presa e explore um majestoso mundo aberto neste premiado RPG de ação!',
    platforms: 'PlayStation 4, PlayStation 5, Microsoft Windows',
  },
  {
    id: '15',
    title: 'Hollow Knight',
    price: 'R$ 62,50',
    url: 'https://image.api.playstation.com/cdn/UP1822/CUSA13632_00/GuFQKWlrIVODEA1su20fCOrNZEYX5CB9.png',
    sinopse: 'Forje seu próprio caminho em Hollow Knight! Uma aventura de ação épica através de um vasto reino arruinado de insetos e heróis. Explore cavernas sinuosas, lute contra criaturas maculadas e faça amizade com insetos bizarros, tudo em um estilo clássico 2D desenhado à mão.',
    platforms: 'Playstation 4, Playstation 5, Nintendo Switch, Microsoft Windows',
  },
];

export default Details;