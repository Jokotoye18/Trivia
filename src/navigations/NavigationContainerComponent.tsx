import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from './MainStackNavigator';

export const NavigationContainerComponent = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
