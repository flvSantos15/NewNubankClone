import React from 'react';
import { RouteProp} from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import {Home} from '../screens/Home/';
import {User} from '../screens/User'

type StackParams = {
  Home: undefined;
  User: undefined;
}

export type StackNavProps<T extends keyof StackParams> = {
  navigation: StackNavigationProp<StackParams, T>;
  route: RouteProp<StackParams, T>
}

const stackRoutes = createStackNavigator<StackParams>();

interface RoutesProps {}
const AppRoutes: React.FC = ({}: RoutesProps) => (
  <stackRoutes.Navigator initialRouteName='Home'>

    <stackRoutes.Screen 
      name="Home" 
      component={Home}
      options={{
        headerShown: false
      }}
    />
    <stackRoutes.Screen
      name="User" 
      component={User}
      options={{
        headerShown: false
      }}
    />

  </stackRoutes.Navigator>

)

export default AppRoutes;