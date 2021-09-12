import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from '../screens/Home/index';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (

  <stackRoutes.Navigator>

    <stackRoutes.Screen name="Home" component={Home} />

  </stackRoutes.Navigator>

)

export default AppRoutes;