import styled from 'styled-components';
import { colors, mediaQueries } from '../../../styles/constants';

export interface FilterItemProp {
  active: string;
  item: string;
}

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

export const FilterItem = styled.li<FilterItemProp>`
  position: relative;
  display: inline-block;
  margin: 25px 15px;
  color: ${({ item, active }) =>
    active === item ? `${colors.coral}` : `${colors.white}`};
  text-decoration: none;
  cursor: pointer;
  ::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 2px;
    margin-top: 25px;
    background: ${colors.coral};
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
