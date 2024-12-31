import React from 'react'
import { useState } from 'react';
const RadioQuestion = (props) => {
    const [selected, setSelected] = useState(null);
    const question = props.question
    const options = [
      { value: 1, label: "Strongly Agree" },
      { value: 2, label: "Agree" },
      { value: 3, label: "Neutral" },
      { value: 4, label: "Disagree" },
      { value: 5, label: "Strongly Disagree" },
    ];
    
    const getScore = (value, id) => {
        if(["A1_Score","A7_Score","A8_Score","A10_Score"].includes(id)){
            if(value== 1 || value==2){
                return 1
            }
            return 0
        }else{
            if(value== 1 || value==2){
                return 0
            }
            return 1
        }
    }

    const handleChange = (value) => {
      setSelected(value);
      props.onAnswerChange(props.question.id, getScore(value, props.question.id))
    };
  return (
    <div className='mb-20 text-center flex justify-center flex-col w-full align-middle items-center'>
                <p className='text-2xl'>{question.question}</p>
                <div className="flex items-center justify-between w-3/4 mt-8 relative">
                    <span className="left-0 text-lg text-gray-600 ">
                        Strongly Agree
                    </span>

                    {options.map((option, index) => (
                        <label key={option.value} className="flex flex-col mt-10 items-center">
                        <input
                            type="radio"
                            name="response"
                            value={option.value}
                            checked={selected === option.value}
                            onChange={() => handleChange(option.value)}
                            className="hidden"
                        />
                        <div
                            className={`${
                            index === 0 || index === options.length - 1
                                ? "w-14 h-14" 
                                : index ===1 || index === options.length - 2? 
                                "w-10 h-10" : "w-8 h-8" 
                            } ${
                            selected === option.value
                                ? index === 0 || index === 1
                                ? "bg-green-400 border-green-400"
                                : index === options.length - 2 || index === options.length - 1
                                ? "bg-red-400 border-red-400"
                                : "bg-gray-400 border-gray-400"
                                : index === 0 || index === 1
                                ? "hover:bg-green-400 hover:border-green-400"
                                : index === options.length - 2 || index === options.length - 1
                                ? "hover:bg-red-400 hover:border-red-400"
                                : "hover:bg-gray-400 hover:border-gray-400"
                            } duration-200 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                            selected === option.value ? "" : "border-gray-400"
                            }`}
                        ></div>
                        </label>
                    ))}
                    <span className="right-0 text-lg text-gray-600 ">
                        Strongly Disagree
                    </span>
                </div>
            </div>
  )
}

export default RadioQuestion