import { HomeScreenNavigationProp } from './../../navigations/type';
import { useNavigation } from '@react-navigation/native';
import { IQuestionsResponse } from './../../models/question.model';
import useFetch from '../useFetch';

type ReturnType = {
  isLoading?: boolean;
  error: unknown;
  data?: IQuestionsResponse;
  handleBegin: () => void;
};

export const useHomeHelper = (): ReturnType => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { navigate } = useNavigation<HomeScreenNavigationProp>();

  const handleBegin = () => {
    navigate('Quiz', {
      quizIndex: 0,
      questions: data?.results,
    });
  };

  const { isLoading, error, data } = useFetch<IQuestionsResponse>(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  );

  return {
    isLoading,
    error,
    data,
    handleBegin,
  };
};

export default useHomeHelper;
