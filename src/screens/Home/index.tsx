import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Layout } from '../../components';
import { Text } from '../../components/common/Text';
import { colors } from '../../constants';
import { useHomeHelper } from '../../hooks';
import { styles } from './styles';

export const Home = (): JSX.Element => {
  const { isLoading, error, handleBegin } = useHomeHelper();

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
      >
        <ActivityIndicator animating color={colors.secondaryBg} size="large" />
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
      <Text
        text="Welcome to the Trivia challenge!"
        fontWeight="bold"
        fontSize={30}
        textAlign="center"
        style={styles.title}
      />
      <View style={styles.body}>
        <View style={styles.contentBox}>
          <Text
            text="You will be presented with 10 True or False questions"
            fontWeight="600"
            fontSize={25}
            textAlign="center"
          />
        </View>
        <View style={styles.contentBox}>
          <Text text="Can you score 100%?" fontWeight="600" fontSize={25} textAlign="center" />
        </View>
      </View>
      <View style={styles.btnBox}>
        <Button title="Begin" onPress={handleBegin} />
      </View>
    </Layout>
  );
};
