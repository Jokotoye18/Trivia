import React from 'react';
import { SafeAreaView, View } from 'react-native';
import {} from 'react-native-safe-area-context';
import { globalStyles } from '../styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <View style={globalStyles.container}>{children}</View>
    </SafeAreaView>
  );
};
