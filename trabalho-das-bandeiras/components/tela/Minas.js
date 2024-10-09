import {View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import BeloHorizonte from './imagens/BeloHorizonte';
import Brumadinho from './imagens/BRUMADINHO';
import OuroPreto from './imagens/OUROPRETO';
import Congonhas from './imagens/CONGONHAS';
import style from './style';


function MinasGerais() {
  return (
    
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center',
    justifyContent: 'center', backgroundColor: 'white' }}>

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>BELO HORIZONTE</Text>
      </View>

      <Image
        source={{ uri: BeloHorizonte }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>BRUMADINHO</Text>
      </View>

      <Image
        source={{ uri: Brumadinho }}
        style={{ ...style.imagem2, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>OURO PRETO</Text>
      </View>

      <Image
        source={{ uri: OuroPreto }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>CONGONHAS</Text>
      </View>

      <Image
        source={{ uri: Congonhas }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />
    </View>
    </ScrollView>
  );
}

export default MinasGerais;