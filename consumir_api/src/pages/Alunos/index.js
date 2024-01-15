import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './style';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
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
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} title="Deletar" />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
