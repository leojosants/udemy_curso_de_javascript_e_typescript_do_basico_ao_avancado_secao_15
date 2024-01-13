import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  rgbaColor,
  whiteColor,
} from '../config/colors';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

  body {
    font-family: sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    border-radius: 5px;
    color: ${whiteColor};
    padding: 10px 20px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: ${whiteColor};
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px ${rgbaColor};
`;
