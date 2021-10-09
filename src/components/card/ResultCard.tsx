import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { IResult } from '../../models';
import { globalStyles } from '../../styles';
import { Text } from '../common';

type ResultCardProps = {
  result: IResult;
};

export const ResultCard = ({ result }: ResultCardProps): JSX.Element => {
  const { correct, question } = result;

  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <View style={styles.iconBox}>
        {correct ? (
          <Ionicons name="ios-checkmark-sharp" size={20} color={'green'} />
        ) : (
          <FontAwesome5 name="times" size={17} color="tomato" />
        )}
      </View>
      <View style={styles.questionBox}>
        <Text text={question} numberOfLines={3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  iconBox: {
    flexBasis: '10%',
  },
  questionBox: {
    flexBasis: '90%',
  },
});
