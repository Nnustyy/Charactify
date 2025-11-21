'use client'
import React from 'react';
import CustomModal from '../common/modal';
import RegistrationForm from '@/forms/registration.form';

type Props = {
  active:boolean,
  setActive: (value:boolean) => void
}

const RegistrationModal = ({active, setActive}:Props) => {
  return (
    <CustomModal active={active} setActive={setActive} title='Создать аккаунт' >
      <RegistrationForm/>
    </CustomModal>
  );
};

export default RegistrationModal;