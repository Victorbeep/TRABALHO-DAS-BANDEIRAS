import {View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Sorocaba from './imagens/SOROCABA';
import Itapetininga from './imagens/ITAPETININGA';
import Campinas from './imagens/CAMPINAS';
import Guarulhos from './imagens/GUARULHOS';
import style from './style';


function SaoPaulo({ navigation }) {
  return (
    
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center',
    justifyContent: 'center', backgroundColor: 'white' }}>

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>SOROCABA</Text>
      </View>

      <Image
        source={{ uri: Sorocaba }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>ITAPETININGA</Text>
      </View>

      <Image
        source={{ uri: Itapetininga }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>CAMPINAS</Text>
      </View>

      <Image
        source={{ uri: Campinas }}
        style={{ ...style.imagem, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20, width: 100,  }}
        resizeMode="contain"
      />

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>GUARULHOS</Text>
      </View>

      <Image
        source={{ uri: Guarulhos }}
        style={{ ...style.imagem2, backgroundColor: 'white',
        marginTop: 10, marginBottom: 20 }}
        resizeMode="contain"
      />
    </View>
    </ScrollView>
  );
}

export default SaoPaulo;