import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

const InputQuestion = (props) => {
  const [val, setVal] = useState('');
  const [error, setError] = useState('');
  const question = props.question;

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]+$/.test(value)) {
      setVal(value);
      setError(''); 
    }
  };

  const handleBlur = () => {
    if (val !== '' && (val < 1 || val > 100)) {
      setError('Please enter a valid age (1-100).');
    }
  };

  const handleInputSubmit = () => {
    if (val !== '' && val >= 1 && val <= 100) {
      props.onAnswerChange(question.id, Number(val));
      setError(''); 
    } else {
      setError('Please enter a valid age (1-120).');
    }
  };

  return (
    <div className="mb-20 text-center flex justify-center flex-row gap-20 text-2xl w-full align-middle items-center">
      <p className="text-left">{question.question}</p>
      <div className="w-1/4">
        <Input
          value={val}
          onChange={handleInputChange}
          onBlur={handleBlur} 
          onKeyUp={(e) => e.key === 'Enter' && handleInputSubmit()}
          type="text"
          placeholder={question.placeholder}
          className="p-6"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default InputQuestion;
