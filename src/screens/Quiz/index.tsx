/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { View } from 'react-native';

import { Button, Layout, Text } from '../../components';
import { useQuizHelper } from '../../hooks';
import { globalStyles } from '../../styles';
import { styles } from './styles';

export const Quiz = (): JSX.Element => {
  const { quizIndex, question, category, handlePickAnswer } = useQuizHelper();

  return (
    <Layout>
      <Text
        text={category}
        textAlign="center"
        fontSize={30}
        fontWeight="bold"
        style={styles.title}
      />
      <View style={styles.body}>
        <View style={styles.questionBox}>
          <Text text={question} fontSize={20} fontWeight="600" textAlign="center" />
        </View>
        <Text text={`${quizIndex + 1} of 10`} fontSize={20} fontWeight="400" textAlign="center" />
      </View>
      <View style={{ flex: 1 }}>
        <View style={globalStyles.rowBetween}>
          <View style={styles.btnBox}>
            <Button
              title="False"
              backgroundColor="tomato"
              onPress={() => handlePickAnswer('False')}
            />
          </View>
          <View style={styles.btnBox}>
            <Button title="True" backgroundColor="green" onPress={() => handlePickAnswer('True')} />
          </View>
        </View>
      </View>
    </Layout>
  );
};
