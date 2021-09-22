import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const Logo = styled.a`
  padding: 25px 0;
  color: ${colors.coral};
  span {
    font-weight: 400;
  }
  :hover {
    color: ${colors.white};
  }
`;
