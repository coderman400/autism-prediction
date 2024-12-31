import React from 'react'
// age: int
// gender: str
// ethnicity: str
// jaundice: str
// autism: str
// country_of_res: str
// relation: str
import { Input } from "@/components/ui/input"

const InputQuestion = (props) => {
    const question = props.question
  return (
    <div className='mb-20 text-center flex justify-center flex-row gap-20 text-2xl w-full align-middle items-center'>
        <p className='align-left'>{question.question}</p> 
        <Input type="text" placeholder={question.placeholder} className='w-1/4 p-6'></Input>
    </div>
  )
}

export default InputQuestion