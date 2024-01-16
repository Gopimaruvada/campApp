
import * as React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screen/Home';


export type RootStackParamList = {
  Home: undefined;
  
  
};
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
 
  return (
    <NavigationContainer>
     
          <Stack.Navigator initialRouteName="Home">


            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />

          </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;
