import { IResult } from './../models/question.model';
export const getScore = (results: IResult[]): number => {
  return results.filter((result) => result.correct === true).length;
};
