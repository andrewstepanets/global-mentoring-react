import styled from 'styled-components';
import { colors, mediaQueries } from '../../styles/constants';

export const SearchWrapper = styled.div`
  padding: 25px 55px 55px;
  @media screen and (max-width: 480px) {
    padding: 25px 15px 55px;
  }
  h2 {
    padding: 35px 0;
    margin: 0 60px;
    font-size: 30px;
    font-weight: 400;
    color: ${colors.white};
    text-transform: uppercase;
    ${mediaQueries('sizeXL')`
      text-align: center;
    `}
    ${mediaQueries('sizeS')`
      margin: 0;
      font-size: 25px;
      text-align: center;
    `}
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${mediaQueries('sizeXXL')`
      flex-direction: column;
      align-items: center;
  `}
`;
