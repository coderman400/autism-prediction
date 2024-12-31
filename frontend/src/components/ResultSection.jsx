import React from 'react'
import autistic from '../assets/autistic.png'
import not_autistic from '../assets/not_autistic.png'
const ResultSection = (props) => {
  return (
    <section className="bg-white h-52 w-full flex justify-center relative">
            <div className="absolute z-20 flex justify-center w-full gap-10">
            </div>
            <div
                className={`${props.autistic? 'bg-secondary' : 'bg-primary'} absolute w-full md:w-3/4 h-64 px-20 p-8 flex items-center justify-between`}
                style={{
                clipPath:
                    "polygon(.65% 0%,98.7% 0%,100% 49.41%,98.7% 84.71%,65.58% 100%,39.61% 97.65%,11.69% 100%,.65% 92.94%,0% 23.53%)",
                }}
            >   <div>
                    <p className='text-6xl font-bold text-white'>{props.autistic? 'Autistic' : 'Not Autistic'}.</p>
                    <p className='text-2xl  text-white'>You are probably {props.autistic? "autistic, and that's okay.": 'not autistic. Probably.'}</p>
                </div>
                <div>
                    <img className='h-96 w-96 opacity-75 mt-16 hidden md:block -scale-x-100 ' src={props.autistic? autistic : not_autistic}></img>
                </div>
                
            </div>
        </section>
  )
}

export default ResultSection