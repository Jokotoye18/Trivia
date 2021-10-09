import { IResult } from './../../models/question.model';
import { ResultScreenNavigationProp } from './../../navigations/type';
import { useNavigation } from '@react-navigation/native';

import { getScore } from './../../utils/getScore';
import { useContext } from 'react';
import { QuestionContext } from '../../contexts';
import { useResult } from './../useResults';

type ReturnType = {
  results: IResult[];
  score: number;
  handleClose: () => void;
};

export const useResultHelper = (): ReturnType => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { popToTop } = useNavigation<ResultScreenNavigationProp>();

  const [results] = useResult();
  const { setResults } = useContext(QuestionContext);
  const score = getScore(results);

  const handleClose = () => {
    setResults([]);
    popToTop();
  };

  return {
    results,
    score,
    handleClose,
  };
};
