import React from 'react';
import { FlatList } from 'react-native';

import { Layout, ResultCard, ResultFooter, ResultHeader } from '../../components';
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
        ListHeaderComponent={<ResultHeader score={score} />}
        ListFooterComponent={<ResultFooter handleClose={handleClose} />}
      />
    </Layout>
  );
};
