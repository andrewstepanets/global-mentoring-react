import styled from 'styled-components';
import { colors, mediaQueries } from '../../styles/constants';

export const SearchWrapper = styled.div`
  padding: 55px 55px 218px 55px;
  ${mediaQueries('sizeL')`
    padding: 25px 15px 55px 15px;
  `}
`;

export const InputSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  ${mediaQueries('sizeXXL')`
      flex-direction: column;
      align-items: center;
  `}
`;

export const SearchTitle = styled.h2`
  padding: 35px 0;
  margin: 0 60px;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
  ${mediaQueries('sizeXXL')`
      text-align: center;
    `}
  ${mediaQueries('sizeL')`
      margin: 0;
      font-size: 25px;
      text-align: center;
    `}
    ${mediaQueries('sizeS')`
      margin: 0;
      font-size: 23px;
      text-align: center;
    `}
`;
