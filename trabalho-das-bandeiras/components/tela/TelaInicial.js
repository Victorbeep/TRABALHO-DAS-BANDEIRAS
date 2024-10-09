import {View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import SP from './imagens/SP';
import BH from './imagens/BH';
import MG from './imagens/MG';
import style from './style'


function HomeScreen({ navigation }) {
  return (
    
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center',
    justifyContent: 'center', backgroundColor: 'white' }}>

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>SÃO PAULO</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SP')}>
        <Image
          source={{ uri: SP }}
          style={{ ...style.imagem, backgroundColor: 'white',
          marginTop: 10, marginBottom: 20, shadowColor: 'black' }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>MINAS GERAIS</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('MG')}>
        <Image
          source={{ uri: MG }}
          style={{ ...style.imagem, backgroundColor: 'white',
          marginTop: 10, marginBottom: 20 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={{ ...style.container }}>
        <Text style={{ ...style.text }}>BAHIA</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('BH')}>
        <Image
          source={{ uri: BH }}
          style={{ ...style.imagem, backgroundColor: 'white',
          marginTop: 10, marginBottom: 20 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}



  

export default HomeScreen;