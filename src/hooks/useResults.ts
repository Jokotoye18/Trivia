import { useContext } from 'react';

import { IResult } from './../models/question.model';
import { QuestionContext } from '../contexts';

export const useResult = (): [IResult[]] => {
  const { results } = useContext(QuestionContext);
  return [results];
};
