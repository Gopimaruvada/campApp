import * as React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screen/Home';
import PinScreen from '../screen/pinScreen';
import UpcomingCampScreen from '../screen/upcomingCamp';
import CampDetails from '../screen/CampDetails';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="pinScreen">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="pinScreen"
        component={PinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="upComing"
        component={UpcomingCampScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CampDetails"
        component={CampDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
