import React from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { Layout } from '../../components';
import { Text } from '../../components/common/Text';
import { images } from '../../constants';
import useFetch from '../../hooks/useFetch';
import { IQuestionsResponse } from '../../models';
import { HomeProps } from '../../navigations/type';

export const Home = ({ navigation: { navigate } }: HomeProps): JSX.Element => {
  const { width, height } = useWindowDimensions();

  const handleBegin = () => {
    navigate('Quiz', {
      quizIndex: 0,
      questions: data?.results,
    });
  };

  const { isLoading, error, data } = useFetch<IQuestionsResponse>(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  );

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
      >
        <ActivityIndicator animating color="red" size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text text="An Error occured!" />
      </View>
    );
  }

  return (
    <Layout>
      <Image
        source={images.homeBg}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        width={width}
        height={height}
      />
      <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        <View style={{ flexBasis: '25%' }}>
          <Text text="Welcome to the Trivia challenge" textAlign="center" />
        </View>
        <View style={{ flexBasis: '25%' }}>
          <Text text="Welcome to the Trivia challenge" textAlign="center" />
        </View>
        <View style={{ flexBasis: '25%' }}>
          <Text text="Welcome to the Trivia challenge" textAlign="center" />
        </View>
        <View style={{ flexBasis: '25%', flex: 1, borderWidth: 2 }}>
          <Button title="Begin" onPress={handleBegin} />
        </View>
      </View>
    </Layout>
  );
};
