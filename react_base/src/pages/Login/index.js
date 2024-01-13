import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './style';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();
    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }

  return (
    <Container>
      <Title>Login</Title>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
