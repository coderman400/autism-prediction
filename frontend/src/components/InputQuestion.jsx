import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

const InputQuestion = (props) => {
  const [val, setVal] = useState('');  
  const question = props.question;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setVal(value);
    props.onAnswerChange(question.id, Number(value)); 
  };

  return (
    <div className="mb-20 text-center flex justify-center flex-row gap-20 text-2xl w-full align-middle items-center">
      <p className="text-left">{question.question}</p>  
      <Input
        value={val}
        onChange={handleInputChange}
        type="text"
        placeholder={question.placeholder}
        className="w-1/4 p-6"
      />
    </div>
  );
};

export default InputQuestion;
