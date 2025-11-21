'use client'
import React, { ReactNode } from 'react';

type Props = {
  active: boolean,
  setActive: (value: boolean) => void,
  children: ReactNode,
  title: string
}

const CustomModal = ({ active, setActive, children, title }: Props) => {
  if (!active) return null;

  return (
    <div 
      className='h-screen w-screen bg-black bg-opacity-50 fixed top-0 left-0 flex items-center justify-center z-50 p-4'
      onClick={() => setActive(false)}
    >
      <div 
        className='p-6 rounded-xl bg-white w-full max-w-md max-h-[90vh] overflow-y-auto shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;