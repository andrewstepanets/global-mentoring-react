import styled from 'styled-components';
import { colors, mediaQueries } from '../../styles/constants';

export const FilterSortingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 65px;
  border-bottom: 2px solid ${colors.grey_light};
  ${mediaQueries('sizeXXL')`
    flex-direction: column;
    align-items: center;
    border-bottom: none;
  `}
`;

export const MoviesAmount = styled.h3`
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
