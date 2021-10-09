import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './common';

type ErrorProps = {
  error: unknown;
};

export const Error = ({ error }: ErrorProps): JSX.Element => {
  const isString = typeof error === 'string';
  return (
    <View style={styles.wrapper}>
      <Text text={isString ? error : 'An Error occured!'} fontWeight="500" fontSize={17} />
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
