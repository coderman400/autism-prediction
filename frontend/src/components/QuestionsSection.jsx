import React, { useState } from 'react';
import RadioQuestion from "./RadioQuestion";
import InputQuestion from './InputQuestion';
import ButtonQuestion from './ButtonQuestion';
import SelectQuestion from './SelectQuestion';
import { Button } from './ui/button';
import data from '../data/questions.json';

const QuestionsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = [5, 5, 3, 4];
  const totalPages = questionsPerPage.length;

  const startIdx = questionsPerPage
    .slice(0, currentPage - 1)
    .reduce((a, b) => a + b, 0);
  const endIdx = startIdx + questionsPerPage[currentPage - 1];
  const currentQuestions = data.questions.slice(startIdx, endIdx);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-3/4 flex flex-col align-middle justify-center mt-20">
        {currentQuestions.map((question, index) => {
          switch (question.type) {
            case "radio":
              return (
                <RadioQuestion
                  key={index}
                  question={question}
                />
              );
            case "input":
              return (
                <InputQuestion
                  key={index}
                  question={question}
                />
              );
            case "button":
              return (
                <ButtonQuestion
                  key={index}
                  question={question}
                />
              );
            case "select":
              return (
                <SelectQuestion
                  key={index}
                  question={question}
                />
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="flex justify-center">
        <Button
          className="w-32 h-16 text-2xl"
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default QuestionsSection;
