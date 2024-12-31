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
    const question = props.question
  return (
    <div className='mb-20 text-center flex justify-center flex-row gap-20 text-2xl w-full align-middle items-center'>
        <p className=''>{question.question} </p>
        <Select>
            <SelectTrigger className="w-1/4 p-6">
                <SelectValue placeholder={question.placeholder}/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {question.options.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
  )
}

export default SelectQuestion
