import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../constants';

export const Loader = (): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator animating color={colors.secondaryBg} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
