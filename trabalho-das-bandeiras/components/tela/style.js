import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  imagem: {
    width: Dimensions.get('window').width,
    height: 180,
  },

  imagem2: {
    width: 260,
    height: 180,
  },

  container: {
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    width: 270,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif, Helvetica, Arial',
  },
});

export default style;