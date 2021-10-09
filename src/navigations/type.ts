import { StackNavigationProp } from '@react-navigation/stack';

export type MainStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Result: undefined;
};

// Home
export type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;
export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

// Quiz
export type QuizScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Quiz'>;
export type QuizProps = {
  navigation: QuizScreenNavigationProp;
};

// Result
export type ResultScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Result'>;
export type ResultProps = {
  navigation: ResultScreenNavigationProp;
};
