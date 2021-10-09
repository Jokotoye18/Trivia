import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Quiz, Result } from '../screens';

const MainStack = createStackNavigator();

export const MainStackNavigator = (): JSX.Element => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Quiz" component={Quiz} />
      <MainStack.Screen name="Result" component={Result} />
    </MainStack.Navigator>
  );
};
