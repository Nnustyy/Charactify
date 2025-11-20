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
    className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    >
      {children}
    </button>
  );
};

export default Button;