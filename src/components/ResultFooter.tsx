import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './common';

type ResultFooterProps = {
  handleClose: () => void;
};

export const ResultFooter = ({ handleClose }: ResultFooterProps): JSX.Element => {
  return (
    <View style={styles.btn}>
      <Button title="Play Again?" onPress={handleClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 10,
  },
});
