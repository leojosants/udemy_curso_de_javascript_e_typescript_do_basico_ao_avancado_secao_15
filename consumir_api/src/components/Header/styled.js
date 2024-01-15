import styled from 'styled-components';
import { primaryColor, whiteColor } from '../../config/colors';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: ${whiteColor};
    margin: 0 10px 0 0;
    font-weight: bold;
  }

  .logged {
    color: ${colors.sixSixff33};
    font-size: 36px;
  }

  .notLogged {
    color: ${colors.whiteColor};
    font-size: 36px;
  }
`;
