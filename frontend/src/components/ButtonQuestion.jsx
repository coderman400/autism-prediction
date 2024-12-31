import React from 'react'
import { Button } from './ui/button'
// age: int
// gender: str
// ethnicity: str
// jaundice: str
// autism: str
// country_of_res: str
// relation: str
const ButtonQuestion = (props) => {
    const question = props.question
  return (
    <div className='mb-20 text-center flex justify-center flex-col gap-10 text-2xl w-full items-center'>
        <p className='text-2xl'>{question.question}</p> 
        <div className='flex flex-row gap-4 justify-center items-center'>
            {question.options.map((option) => (
                <Button variant="secondary" className='p-8 text-lg'>{option}</Button>
            ))}

        </div>
    </div>
  )
}

export default ButtonQuestion