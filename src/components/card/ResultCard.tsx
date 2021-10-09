import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IResult } from '../../models';
import { globalStyles } from '../../styles';
import { Text } from '../common';

type ResultCardProps = {
  result: IResult;
};

export const ResultCard = ({ result }: ResultCardProps): JSX.Element => {
  const { correct, question } = result;

  const plusMinus = correct ? '+' : '-';

  return (
    <View style={globalStyles.rowBetween}>
      <View style={{ flexBasis: '10%', alignSelf: 'flex-start' }}>
        <Text text={plusMinus} />
      </View>
      <View style={{ flexBasis: '80%' }}>
        <Text text={question} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
