import styled, { css } from 'styled-components';
import {
  colors,
  colorsRgba,
  mediaQueries,
  rgbaMap,
} from '../../styles/constants';

interface InputBlockProps {
  search?: boolean;
  placeholder?: string;
}

export const InputBlock = styled.div<InputBlockProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  input {
    padding: 15px 20px;
    color: ${colors.white};
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: ${rgbaMap(colorsRgba.rgba_grey_light, 0.3)};
    &::placeholder {
      color: ${colors.grey_light};
      font-size: 18px;
      font-weight: 100;
    }
  }

  label {
    margin: 15px 0;
    color: ${colors.coral};
    font-size: 14px;
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    css`
      input {
        width: 95%;
        margin-right: 20px;
        font-size: 18px;
        &::placeholder {
          font-size: 20px;
          font-weight: 100;
        }
        ${mediaQueries('sizeXXL')`
          margin-right: 0px;
        `}
      }
    `};
`;
