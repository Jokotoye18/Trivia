import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <ScrollView
        contentContainerStyle={globalStyles.container}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
