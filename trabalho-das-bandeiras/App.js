import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Telas from './components/tela';


const Menu = createMaterialTopTabNavigator(); //Escolher Menu
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Menu.Navigator initialRouteName="Home" 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: 'home',
              SP: 'flag-checkered',
              MG: 'flag-checkered',
              BH: 'flag-checkered'
            };

            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                color={color}
                size={size}
              />
            );
          },
        })}
        >

          <Menu.Screen name="Home" component={Telas.TelaInicial} />
          <Menu.Screen name="SP" component={Telas.SaoPaulo} />
          <Menu.Screen name="MG" component={Telas.Minas} />
          <Menu.Screen name="BH" component={Telas.Bahia} />
        </Menu.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;