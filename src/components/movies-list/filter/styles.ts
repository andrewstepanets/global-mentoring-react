import styled from 'styled-components';
import { colors, mediaQueries } from '../../../styles/constants';

export const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: ${colors.white};
  text-transform: uppercase;
  ${mediaQueries('sizeM')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const FilterListItem = styled.li`
  display: inline-block;
  text-decoration: none;
  position: relative;
  margin: 25px 15px;
  cursor: pointer;
  ::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin-top: 25px;
    background: #f65261;
    transition: width 0.3s;
  }
  :hover::after {
    width: 100%;
  }
  :hover {
    color: ${colors.coral};
  }
  :active {
    color: ${colors.grey_light};
  }
`;
