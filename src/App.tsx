import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';

import { NavigationContainerComponent } from './navigations/NavigationContainerComponent';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainerComponent />
    </>
  );
};

export default registerRootComponent(App);
