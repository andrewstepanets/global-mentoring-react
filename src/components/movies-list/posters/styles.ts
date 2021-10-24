import styled from 'styled-components';
import { colors, mediaQueries } from '../../../styles/constants';

export const PostersWrapper = styled.div`
  padding: 0 30px 30px 30px;
`;

export const NumberMovies = styled.h3`
  padding: 25px 70px;
  font-size: 18px;
  font-weight: 100;
  color: ${colors.white};
  ${mediaQueries('sizeXXL')`
    text-align: center;
  `}
  span {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const PostersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 70px;
`;

export const PostersError = styled.div`
  margin: 150px;
  color: ${colors.white};
  font-weight: 200;
  font-size: 32px;
  text-align: center;
`;
