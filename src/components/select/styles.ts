import styled from 'styled-components';
import ArrowIcon from '../../assets/images/drop-down-arrow.svg';
import { colors, colorsRgba, rgbaMap } from '../../styles/constants';

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const SelectTitle = styled.label`
  margin: 15px 0;
  color: ${colors.coral};
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
`;

export const SelectMain = styled.select`
  padding: 15px 20px;
  appearance: none;
  color: ${colors.grey_light};
  font-size: 18px;
  font-weight: 100;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: ${rgbaMap(colorsRgba.rgba_grey_light, 0.3)};
  background: ${rgbaMap(colorsRgba.rgba_grey_light, 0.3)} url(${ArrowIcon})
    no-repeat 95%;
`;
