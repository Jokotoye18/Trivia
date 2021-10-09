/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { Layout, Text } from '../../components';
import { QuestionContext } from '../../contexts';
import { IResult } from '../../models';
import { QuizProps } from '../../navigations/type';
import { globalStyles } from '../../styles';

export const Quiz = ({ navigation: { replace, navigate }, route }: QuizProps): JSX.Element => {
  const { quizIndex, questions } = route.params;
  const { setResults } = useContext(QuestionContext);

  const { category, question, correct_answer } = questions[quizIndex];

  const handlePickAnswer = (answer: 'True' | 'False') => {
    if (quizIndex === 9) {
      const result = {
        ...questions[quizIndex],
        correct: correct_answer === answer,
      } as IResult;
      setResults((results) => [...results, result]);
      navigate('Result');
    } else {
      const result = {
        ...questions[quizIndex],
        correct: correct_answer === answer,
      } as IResult;
      setResults((results) => [...results, result]);
      replace('Quiz', {
        quizIndex: quizIndex + 1,
        questions,
      });
    }
  };

  return (
    <Layout>
      <Text text={category} />
      <Text text={question} />
      <Text text={`${quizIndex + 1} of 10`} textAlign="center" />
      <View style={globalStyles.rowCenter}>
        <Button title="True" onPress={() => handlePickAnswer('True')} />
        <Button title="False" onPress={() => handlePickAnswer('False')} />
      </View>
    </Layout>
  );
};
