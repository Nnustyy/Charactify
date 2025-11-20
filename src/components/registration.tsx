import React, { useState } from 'react';

const Registration = () => {

  const [form, setForm] = useState({
    password:'',
    email:'',
    confirmPassword:''
  })

  const onSubmit = () => {

  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Почта</label>
      <input
      type="email"
      id='email'
      placeholder='Your email'
      />
      <label htmlFor="password">Пароль</label>
      <input 
      type="password"
      id='password'
      placeholder='Your password'
      />
      <label htmlFor='confirmPassword'>Подтвердите пароль</label>
      <input 
      id='confirmPassword'
      type="password"
      />
      <button type='submit'>Создать аккаунт</button>
    </form>
  );
};

export default Registration;