import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(actions.loginFailure());
    toast.info('LOGOUT realizado com sucesso!');
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} title="Página principal" />
      </Link>

      <Link to="/register">
        <FaUserAlt size={24} title="Registrar" />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} title="Sair" />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} title="Entrar" />
        </Link>
      )}

      {isLoggedIn ? (
        <i className="bx bx-user-check bx-burst logged" title="Logado" />
      ) : (
        <i className="bx bx-user-x notLogged" title="Deslogado" />
      )}
    </Nav>
  );
}
