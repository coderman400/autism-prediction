import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectQuestion = (props) => {
    const { question, onAnswerChange, answer } = props;
    
    const handleSelectChange = (value) => {
        onAnswerChange(question.id, value); 
    };

    return (
        <div className='mb-20 text-center flex justify-center flex-col md:flex-row md:gap-20 gap-4 text-lg md:text-2xl w-full align-middle items-center'>
            <p className=''>{question.question} </p>
            <Select value={answer} onValueChange={handleSelectChange}> 
                <SelectTrigger className="w-1/2 md:w-1/4 p-6">
                    <SelectValue placeholder={question.placeholder}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {question.options.map((option) => (
                            <SelectItem key={option} value={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectQuestion;
