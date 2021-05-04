import React from 'react';
import { ButtonWrapper } from '../styles';

const Button = ({ btnText }) => {
  return (
    <>
      <ButtonWrapper>{btnText}</ButtonWrapper>
    </>
  );
};

export default Button;
