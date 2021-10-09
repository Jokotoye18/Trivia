import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { Layout, ResultCard, Text } from '../../components';
import { QuestionContext } from '../../contexts';
import { useResult } from '../../hooks';
import { ResultProps } from '../../navigations/type';
import { globalStyles } from '../../styles';
import { getScore } from '../../utils';

export const Result = ({ navigation: { popToTop } }: ResultProps): JSX.Element => {
  const [results] = useResult();
  const { setResults } = useContext(QuestionContext);
  const score = getScore(results);

  const handleClose = () => {
    setResults([]);
    popToTop();
  };

  return (
    <Layout>
      <View style={[globalStyles.rowEnd, { height: 20 }]}>
        <Text text="close" onPress={handleClose} />
      </View>
      <FlatList
        data={results}
        renderItem={({ item }) => <ResultCard result={item} />}
        keyExtractor={(item) => `${item.question} ${item.category}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ marginBottom: 20 }}>
            <Text text="You scored" textAlign="center" fontWeight="700" />
            <Text text={`${score} / 10`} textAlign="center" fontWeight="700" />
          </View>
        }
      />
    </Layout>
  );
};
