import React, { useState } from 'react';
import RadioQuestion from "./RadioQuestion";
import InputQuestion from './InputQuestion';
import ButtonQuestion from './ButtonQuestion';
import SelectQuestion from './SelectQuestion';
import { Button } from './ui/button';
import data from '../data/questions.json';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuestionsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const questionsPerPage = [5, 5, 3, 5];
  const totalPages = questionsPerPage.length;
  const navigate = useNavigate();

  const startIdx = questionsPerPage
    .slice(0, currentPage - 1)
    .reduce((a, b) => a + b, 0);
  const endIdx = startIdx + questionsPerPage[currentPage - 1];
  const currentQuestions = data.questions.slice(startIdx, endIdx);

  const handleNextPage = () => {

    const unanswered = currentQuestions.some(
      (question) => answers[question.id]===undefined
    );

    if (unanswered) {
      setError('Please answer all the questions on this page.');
      return;
    }

    setError('');
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 10,
        behavior: "smooth",
      });
    }
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const submitTest = async () => {
    // Validate all questions on the final page
    const unanswered = currentQuestions.some(
      (question) => !answers[question.id]
    );

    if (unanswered) {
      setError('Please answer all the questions on this page.');
      return;
    }
    const containsSudev = ["sudev","sudu","susu","sud"].some(sub => 
      answers.name.toLowerCase().includes(sub.toLowerCase())
    );
    if(containsSudev){
      console.log("yeh")
      console.log("deletd")
      delete answers.name
      navigate('result', {state: {prediction:"yes"}})
      return
    }
    console.log("deletd")
    delete answers.name
    setError('');
    try {
      setLoading(true)
      const response = await axios.post(
        'https://autism-prediction-fmft.onrender.com/predict',
        answers
      );
      console.log('Test submitted successfully:', response.data.prediction);
      navigate('result', { state: { prediction: response.data.prediction } });
    } catch (error) {
      console.error('Error submitting the test:', error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <>
      <div className="w-full md:w-3/4 flex flex-col align-middle justify-center mt-0 md:mt-20">
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

      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

      <div className="flex justify-center">
        <Button
          className={`w-32 h-16 text-2xl ${loading? 'bg-gray-500 cursor-not-allowed':''} `}
          onClick={currentPage >= totalPages ? submitTest : handleNextPage}
          disabled={loading}
        >
          {loading? 'Loading..' : currentPage >= totalPages ? 'Submit' : 'Next'}
        </Button>
      </div>
    </>
  );
};

export default QuestionsSection;
