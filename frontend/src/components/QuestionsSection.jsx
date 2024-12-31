import React, { useState } from 'react';
import RadioQuestion from "./RadioQuestion";
import InputQuestion from './InputQuestion';
import ButtonQuestion from './ButtonQuestion';
import SelectQuestion from './SelectQuestion';
import { Button } from './ui/button';
import data from '../data/questions.json';
import axios from 'axios';

const QuestionsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({}); // Store answers here
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

  const handleAnswerChange = (questionId, answer) => {
    console.log(questionId, " set as ", answer)
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const submitTest = async () => {
    console.log(answers);
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', answers);
      console.log('Test submitted successfully:', response.data.prediction);
      // handle success
    } catch (error) {
      console.error('Error submitting the test:', error);
    }
  };

  return (
    <>
      <div className="w-3/4 flex flex-col align-middle justify-center mt-20">
        {currentQuestions.map((question) => {
          switch (question.type) {
            case "radio":
              return (
                <RadioQuestion
                  key={question.id}
                  question={question}
                  onAnswerChange={handleAnswerChange}
                  answer={answers[question.id]}
                />
              );
            case "input":
              return (
                <InputQuestion
                  key={question.id}
                  question={question}
                  onAnswerChange={handleAnswerChange}
                  answer={answers[question.id]}
                />
              );
            case "button":
              return (
                <ButtonQuestion
                  key={question.id}
                  question={question}
                  onAnswerChange={handleAnswerChange}
                  answer={answers[question.id]}
                />
              );
            case "select":
              return (
                <SelectQuestion
                  key={question.id}
                  question={question}
                  onAnswerChange={handleAnswerChange}
                  answer={answers[question.id]}
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
          onClick={currentPage >= totalPages ? submitTest : handleNextPage}
        >
          {currentPage >= totalPages ? 'Submit' : 'Next'}
        </Button>
      </div>
    </>
  );
};

export default QuestionsSection;
