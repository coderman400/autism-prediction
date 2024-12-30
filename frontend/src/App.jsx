import { useState } from 'react'
import './App.css'
import ValueCard from './components/ui/ValueCard'
import Question from './components/Question'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
function App() {


  return (
    <div className='flex flex-col w-full justify-center items-center align-middle '>

        <div className='bg-secondary h-40 flex w-full justify-center items-center text-center'>
            <p className='text-5xl text-white font-semibold' >Meow Meow Meow.</p>
        </div>

        <section className='bg-white h-52 w-full relative' >
            <div className='absolute z-20 flex justify-center w-full gap-10'>
                <ValueCard />
                <ValueCard />
                <ValueCard />
            </div>
            <div className='bg-secondary absolute w-full h-20' style={{clipPath: 'polygon(0 0,100% 0,100% calc(100% - 20px),calc(50% + 320px) 100%,47% calc(100% - 15px),calc(50% - 310px) 100%,0 calc(100% - 15px))'}}></div>
        </section>

        <div className='w-3/4 flex flex-col align-middle justify-center mt-20'>
            <Question />
        </div>
    </div>

  )
}

export default App
