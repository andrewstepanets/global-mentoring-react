import styled from 'styled-components';
import { colors, mediaQueries } from '../../styles/constants';

export const MovieListWrapper = styled.div`
  color: ${colors.grey};
`;

export const FilterSelectionWrapper = styled.div`
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
