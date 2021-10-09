import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { Home, Quiz, Result } from '../screens';
import { MainStackParamList } from './type';

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackNavigator = (): JSX.Element => {
  return (
    <MainStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Quiz" component={Quiz} />
      <MainStack.Screen
        name="Result"
        component={Result}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          presentation: 'modal',
        }}
      />
    </MainStack.Navigator>
  );
};
