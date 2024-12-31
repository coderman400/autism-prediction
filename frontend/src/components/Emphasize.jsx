import React from 'react'

const Emphasize = (props) => {
  return (
    <blockquote className={`${props.withBg? `bg-${props.color} bg-opacity-20`: ''} py-4 h-28 flex font-bold flex-col justify-between pl-10 text-2xl border-l-${props.color} border-l-4`}>
        <p className=''>{props.text}</p>
        <footer className='text-xl font-normal'>{props.subtext}</footer>
    </blockquote>  
  )
}

export default Emphasize