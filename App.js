import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/*
Import Screens
*/
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store'
import { Provider, useSelector } from 'react-redux'
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import Delivery from './screens/Delivery';

const Stack = createNativeStackNavigator();


export default function App() {
  return (

      <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} information="information"/>
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
          <Stack.Screen name="BasketScreen" component={BasketScreen} options ={{
            presentation: "modal"
          }}/>
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options ={{
            presentation: "fullScreenModal"
          }}/>
          <Stack.Screen name="Delivery" component={Delivery}  options ={{
            presentation: "fullScreenModal"
          }}/>
        </Stack.Navigator>
      </Provider>  
    </NavigationContainer>
      
  );
}