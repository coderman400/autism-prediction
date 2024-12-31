import React, { useState } from 'react';
import { Button } from './ui/button';

const ButtonQuestion = (props) => {
  const { question, onAnswerChange, answer } = props;
  const [selectedOption, setSelectedOption] = useState(answer || null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    if(question.id=="gender"){
        option = option[0]
    }
    if(question.id=="relation"){
        if(option=="yes"){
            option="Others"
        }else{
            option="Self"
        }
    }
    onAnswerChange(question.id,option); 
  };

  return (
    <div className='mb-20 text-center flex justify-center flex-row gap-10 text-2xl w-full items-center'>
      <p className='text-2xl w-1/4'>{question.question}</p> 
      <div className='flex w-1/4 flex-row gap-4 justify-center items-center'>
        {question.options.map((option) => (
          <Button
            key={option}
            variant={selectedOption === option ? "" : "secondary"} 
            className='p-8 text-lg'
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonQuestion;
