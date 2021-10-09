export interface IQuestion {
  category: string;
  correct_answer: 'True' | 'False';
  difficulty: 'hard' | 'easy';
  incorrect_answers: ['False' | 'True'];
  question: string;
  type: boolean;
}

export interface IQuestionsResponse {
  response_code: string;
  results: IQuestion[];
}

export interface IResult extends IQuestion {
  correct: boolean;
}
