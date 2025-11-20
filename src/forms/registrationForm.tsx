'use client'

import Button from '@/components/UI/common/button';
import React, { useState } from 'react';

const registrationForm = () => {

  const [formData, setFormData] = useState

  const onSubmit = () => {

  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Почта</label>
      <input 
      type="email"
      id='email'
      placeholder='Введите почту'
      />
      <label htmlFor="password">Пароль</label>
      <input 
      type="password"
      id='password'
      placeholder='Введите пароль'
      />
      <label htmlFor="confirmPassword">Подтвердите пароль</label>
      <input 
      type="password"
      id='confirmPassword'
      placeholder='Пароль'
      />
      <div>
        <Button type='submit'>Создать пользователя</Button>
      </div>
    </form>
  );
};

export default registrationForm;