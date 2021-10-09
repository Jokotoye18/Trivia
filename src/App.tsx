import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';

import { NavigationContainerComponent } from './navigations/NavigationContainerComponent';
import { QuestionProvider } from './contexts';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainerComponent />
    </>
  );
};

export default registerRootComponent((): JSX.Element => {
  return (
    <QuestionProvider>
      <App />
    </QuestionProvider>
  );
});
