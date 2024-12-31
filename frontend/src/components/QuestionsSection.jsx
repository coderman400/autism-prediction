import React, { useState } from 'react';
import Question from "./Question";
import { Button } from './ui/button';
const QuestionsSection = () => {
  const questions = Array.from({ length: 17 }, (_, index) => ({
    id: index + 1,
    text: `This is question ${index + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = [5, 5, 3, 4];
  const totalPages = questionsPerPage.length;

  const startIdx = questionsPerPage
    .slice(0, currentPage - 1)
    .reduce((a, b) => a + b, 0);
  const endIdx = startIdx + questionsPerPage[currentPage - 1];
  const currentQuestions = questions.slice(startIdx, endIdx);

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
        {currentQuestions.map((question) => (
          <Question key={question.id} text={question.text} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button className={'w-32 h-16 text-2xl'} onClick={handleNextPage} disabled={currentPage>=totalPages}>Next</Button  >
      </div>
    </>
  );
};

export default QuestionsSection;
