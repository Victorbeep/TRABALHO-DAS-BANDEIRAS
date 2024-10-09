import {View, Text, Image, StyleSheet, Dimensions, ScrollView }
from 'react-native';
import Salvador from './imagens/SALVADOR';
import FDS from './imagens/FDS';
import VDC from './imagens/VDC';
import Cairu from './imagens/CAIRU';
import style from './style';


function Bahia({ navigation }) {
  return (
    
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center',
    justifyContent: 'center', backgroundColor: 'white' }}>

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>SALVADOR</Text>
      </View>

      <Image
        source={{ uri: Salvador }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>FEIRA DE SANTANA</Text>
      </View>

      <Image
        source={{ uri: FDS }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>VITORIA DA CONQUISTA</Text>
      </View>

      <Image
        source={{ uri: VDC }}
        style={{ ...style.imagem, backgroundColor: 'white', marginTop: 10, 
        marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>CAIRU</Text>
      </View>

      <Image
        source={{ uri: Cairu }}
        style={{ ...style.imagem2, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />
    </View>
    </ScrollView>
  );
}

export default Bahia;