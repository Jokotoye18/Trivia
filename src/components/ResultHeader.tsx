import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './common';

type ResultHeaderProps = {
  score: number;
};

export const ResultHeader = ({ score }: ResultHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text text="You scored" textAlign="center" fontWeight="700" fontSize={20} />
      <Text text={`${score} / 10`} textAlign="center" fontWeight="700" fontSize={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
