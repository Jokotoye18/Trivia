import React, { createContext, useEffect, useState } from 'react';
import { IResult } from '../models';

type QuestionProviderProp = {
  children: React.ReactNode;
};

type QuestionType = {
  results: IResult[];
  setResults: React.Dispatch<React.SetStateAction<IResult[]>>;
};

const initialState: QuestionType = {
  results: [],
};

export const QuestionContext = createContext(initialState);

export const QuestionProvider = ({ children }: QuestionProviderProp): JSX.Element => {
  const [results, setResults] = useState<IResult[]>([]);

  useEffect(() => {}, []);

  return (
    <QuestionContext.Provider
      value={{
        results,
        setResults,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
