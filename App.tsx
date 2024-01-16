import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home'
import PinScreen from './src/screen/pinScreen';
import upcomingCamp from './src/screen/upcomingCamp';
import CampDetails from './src/screen/CampDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pinScreen">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
    name="pinScreen"
    component={PinScreen}
    options={{ headerShown: false }}
  />
   <Stack.Screen
    name="upComing"
    component={upcomingCamp}
    options={{ headerShown: false }}
  />

<Stack.Screen
    name="CampDetails"
    component={CampDetails}
    options={{ headerShown: false }}
  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
