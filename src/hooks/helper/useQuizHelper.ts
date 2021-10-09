import { useNavigation, useRoute } from '@react-navigation/native';

import { replaceUnicode } from '../../utils';
import { QuizScreenNavigationProp, QuizScreenRouteProp } from './../../navigations/type';
import { IQuestion, IResult } from './../../models/question.model';
import { useContext } from 'react';
import { QuestionContext } from '../../contexts';

type ReturnType = {
  quizIndex: number;
  question: string;
  category: string;
  handlePickAnswer: (answer: 'True' | 'False') => void;
};

export const useQuizHelper = (): ReturnType => {
  const route = useRoute<QuizScreenRouteProp>();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { navigate, replace } = useNavigation<QuizScreenNavigationProp>();

  const { quizIndex, questions } = route.params as {
    quizIndex: number;
    questions: IQuestion[];
  };
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
  return {
    quizIndex,
    question: replaceUnicode(question),
    category,
    handlePickAnswer,
  };
};

export default useQuizHelper;
