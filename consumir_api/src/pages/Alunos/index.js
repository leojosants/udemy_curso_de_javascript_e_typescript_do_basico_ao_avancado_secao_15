import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import * as colors from '../../config/colors';
import { AlunoContainer, ProfilePicture, NovoAluno } from './style';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      toast.info('ALUNO excluído com sucesso!');
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer LOGIN!');
      } else {
        toast.error('Ocorreu um erro ao EXCLUIR aluno !');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">Novo aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img
                  src={aluno.Fotos[0].url}
                  alt="Foto de perfil"
                  title="Foto de perfil"
                />
              ) : (
                <FaUserCircle size={36} title="Foto de perfil" />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} title="Editar" />
            </Link>

            <Link
              onClick={(e) => handleDeleteAsk(e)}
              to={`/aluno/${aluno.id}/delete`}
            >
              <FaWindowClose size={16} title="Deletar" color={colors.red} />
            </Link>

            <FaExclamation
              onClick={(e) => handleDelete(e, aluno.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
