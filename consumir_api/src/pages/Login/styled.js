import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid ${colors.dddddd};

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
