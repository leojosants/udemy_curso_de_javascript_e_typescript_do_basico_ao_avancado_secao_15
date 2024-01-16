import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { isEmail, isInt, isFloat } from 'validator';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './style';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        // const Foto = get(data, 'Fotos[0].url', '');
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);
        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('NOME deve ter entre 3 e 255 caracteres!');
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error('SOBRENOME deve ter entre 3 e 255 caracteres!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-MAIL inválido!');
    }

    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error('IDADE inválida!');
    }

    if (!isFloat(String(peso))) {
      formErrors = true;
      toast.error('PESO inválido!');
    }

    if (!isFloat(String(altura))) {
      formErrors = true;
      toast.error('ALTURA inválida!');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno EDITADO com sucesso!');
      } else {
        const { data } = await axios.post('/alunos/', {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno CRIADO com sucesso!');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      // const data = get(err, 'response.data', {});
      const errors = get(err, 'response.data.errors', {});

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('ERRO desconhecido!');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

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
            autoComplete="true"
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
