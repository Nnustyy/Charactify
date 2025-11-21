'use client'

import React from 'react';

type Props = {
  children: React.ReactNode,
  type: 'submit' | 'reset' | 'button',
  onClick?: () => void,
  disabled?: boolean 
}

const Button = ({children, type, onClick, disabled = false}:Props) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}
    className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors duration-200'
    >
      {children}
    </button>
  );
};

export default Button;