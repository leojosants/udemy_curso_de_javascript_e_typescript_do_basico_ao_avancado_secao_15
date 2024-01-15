import React, { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('NOME deve ter entre 3 e 255 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-MAIL inválido!');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('SENHA deve ter entre 6 e 50 caracteres!');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome,
        password,
        email,
      });
      toast.success('CADASTRO realizado com sucesso!');
      history.push('/login');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie a sua conta</h1>

      <Form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Digite o nome"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite o email"
            autoComplete="true"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            value={password}
            id="senha"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite a senha"
          />
        </label>
        <button type="submit">Criar conta</button>
      </Form>
    </Container>
  );
}
