import styled from 'styled-components';
import ArrowIcon from '../../../assets/images/drop-down-arrow.svg';
import { colors, mediaQueries } from '../../../styles/constants';

export const SelectionSelect = styled.select`
  display: flex;
  justify-content: space-between;
  padding: 5px 30px 5px 5px;
  border: ${colors.grey_dark};
  outline: 0px;
  appearance: none;
  font-size: 16px;
  color: ${colors.white};
  background-color: ${colors.grey_dark};
  text-transform: uppercase;
  background: ${colors.grey_dark} url(${ArrowIcon}) no-repeat 95%;
  ${mediaQueries('sizeM')`
      flex-direction: column;
      align-items: center;
  `}
`;

export const SelectionOption = styled.option`
  margin: 25px 15px;
  font-size: 16px;
  color: ${colors.white};
  text-transform: uppercase;
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
  :hover {
    color: ${colors.coral};
  }
  :active {
    color: ${colors.grey_light};
  }
`;

export const SelectionTitle = styled.div`
  margin-right: 15px;
  font-size: 16px;
  color: ${colors.grey_light};
  text-transform: uppercase;
`;

export const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
`;
