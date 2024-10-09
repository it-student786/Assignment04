import React from 'react';
import { ButtonProps } from '../types';

const Button = ( props:ButtonProps) => {
    return (
        <>
        <button className='bg-900 rounded-md text-lx p-2 mt-3'>{props.btnText}</button>
        </>
    );
};

export default Button;