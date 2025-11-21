'use client'

import Button from '@/components/UI/common/button';
import { FormData } from '@/types/types';
import React, { useState } from 'react';

const LoginForm = () => {

  const [formData, setFormData] = useState<FormData>({
    email:'',
    password:'',
    confirmPassword:''
  })

  const onSubmit = () => {

  }

  return (
    <form onSubmit={onSubmit} className='m-1'>
      <div className="space-y-2 mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email адрес
        </label>
        <input 
          type="email"
          id="email"
          value={formData.email}
          // onChange={handleChange}
          placeholder="your@email.com"
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black`}
        />
        </div>
      <div className="space-y-2 mb-5">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Пароль
        </label>
        <input 
          type="password"
          id="password"
          value={formData.password}
          // onChange={handleChange}
          placeholder="Не менее 6 символов"
          className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black`}
        />
        </div>
      <div>
        <Button type='submit'>Войти</Button>
      </div>
    </form>
  );
};

export default LoginForm;