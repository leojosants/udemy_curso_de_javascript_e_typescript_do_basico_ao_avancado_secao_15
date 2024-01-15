import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

  body {
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    border-radius: 5px;
    color: ${colors.whiteColor};
    padding: 10px 20px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    color: ${colors.primaryDarkColor};
  }

  .Toastify__progress-bar--success {
    background: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    color: ${colors.primaryDarkColor};
  }

  .Toastify__progress-bar--error {
    background: ${colors.errorColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    color: ${colors.primaryDarkColor};
  }

  .Toastify__progress-bar--info {
    color: ${colors.infoColor};

  }

  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    color: ${colors.primaryDarkColor};
  }

  .Toastify__progress-bar--warning {
    background: ${colors.warningColor};
  }
`;

export const Container = styled.section`
  max-width: 600px;
  background-color: ${colors.whiteColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px ${colors.rgbaColor};
`;
