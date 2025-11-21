'use client'
import React from 'react';
import CustomModal from '../common/modal';
import LoginForm from '@/forms/login.form';

type Props = {
  active:boolean,
  setActive: (value:boolean) => void
}

const LoginModal = ({active, setActive}:Props) => {
  return (
    <CustomModal active={active} setActive={setActive} title='Войти' >
      <LoginForm/>
    </CustomModal>
  );
};

export default LoginModal;