import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { ResultCard, ResultFooter, ResultHeader } from '../../components';
import { useResultHelper } from '../../hooks';
import { globalStyles } from '../../styles';
import { styles } from './styles';

export const Result = (): JSX.Element => {
  const { results, score, handleClose } = useResultHelper();

  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <FlatList
        data={results}
        renderItem={({ item }) => <ResultCard result={item} />}
        keyExtractor={(item) => `${item.question} ${item.category}`}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.container}
        ListHeaderComponent={<ResultHeader score={score} />}
        ListFooterComponent={<ResultFooter handleClose={handleClose} />}
      />
    </SafeAreaView>
  );
};
