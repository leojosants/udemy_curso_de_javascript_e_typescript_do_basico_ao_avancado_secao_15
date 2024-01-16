import React, { useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './style';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            name="nome"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />
        </label>

        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            type="text"
            value={sobrenome}
            name="sobrenome"
            id="sobrenome"
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Digite o sobrenome"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail"
          />
        </label>

        <label htmlFor="idade">
          Idade:
          <input
            type="number"
            value={idade}
            name="idade"
            id="idade"
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Digite o idade"
          />
        </label>

        <label htmlFor="peso">
          Peso:
          <input
            type="text"
            value={peso}
            name="peso"
            id="peso"
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite o peso"
          />
        </label>

        <label htmlFor="altura">
          Altura:
          <input
            type="text"
            value={altura}
            name="altura"
            id="altura"
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite o altura"
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
