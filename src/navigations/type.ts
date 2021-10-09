import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { IQuestion } from '../models';

export type MainStackParamList = {
  Home: undefined;
  Quiz: { quizIndex: number; questions?: IQuestion[] };
  Result: undefined;
};

// Home
export type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;
export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

// Quiz
export type QuizScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Quiz'>;
export type QuizScreenRouteProp = RouteProp<MainStackParamList, 'Quiz'>;

export type QuizProps = {
  navigation: QuizScreenNavigationProp;
  route: QuizScreenRouteProp;
};

// Result
export type ResultScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Result'>;
export type ResultProps = {
  navigation: ResultScreenNavigationProp;
};
