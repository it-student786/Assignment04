import React from 'react';
import { CardProps } from '../types';
import Button from './Button';

const Card = (props: CardProps) => {
    return (
        <>
        <div className="bg-green-200 w-full max-h-80 mx-16 text-center rounded-xl
        drop-shadow-ad hover:scale-105 hover:shadow-lg p-6 pl-6 transition duration-300
        ease-in-out hover:bg-yellow-200 hover:text-black hover:cursor-pointer
        text-xl">
          <h1 className="text-2xl pb-3 underline">Teacher ID Card</h1>
          <div className="text-start">
            <h2>Name: { props.name}</h2>
            <h2>Age: { props.age}</h2>
            <h2>RollNumber: { props.rollNumber}</h2>
            <h2>Day: { props.day}</h2>
            <h2>Time: { props.time}</h2>
          </div>
        </div>
        
        </>
    )

}

export default Card;