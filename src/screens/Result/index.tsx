import React from 'react';
import { FlatList, View } from 'react-native';

import { Button, Layout, ResultCard, Text } from '../../components';
import { useResultHelper } from '../../hooks';
import { styles } from './styles';

export const Result = (): JSX.Element => {
  const { results, score, handleClose } = useResultHelper();

  return (
    <Layout>
      <FlatList
        data={results}
        renderItem={({ item }) => <ResultCard result={item} />}
        keyExtractor={(item) => `${item.question} ${item.category}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={{ marginBottom: 20 }}>
            <Text text="You scored" textAlign="center" fontWeight="700" />
            <Text text={`${score} / 10`} textAlign="center" fontWeight="700" />
          </View>
        }
        ListFooterComponent={
          <View style={styles.btn}>
            <Button title="Play Again?" onPress={handleClose} />
          </View>
        }
      />
    </Layout>
  );
};
