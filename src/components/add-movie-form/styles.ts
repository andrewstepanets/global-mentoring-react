import styled from 'styled-components';
import { colors, colorsRgba, rgbaMap } from '../../styles/constants';

export const AddMovieFormWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  /* when this form is showing it states flex instead none */
  /* display: flex; */
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${rgbaMap(colorsRgba.grey_dark, 0.7)};
`;

export const AddMovieFormContainer = styled.div`
  position: relative;
  max-width: 780px;
  width: 95%;
  margin: auto;
  padding: 20px 30px;
  color: ${colors.white};
  background-color: ${colors.grey_dark};
  border-radius: 5px;
`;

export const AddMovieFormInner = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  div:last-child {
    grid-column: 1 / 3;
  }
`;

export const AddMovieFormTitle = styled.h2`
  margin: 20px 0;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
`;

export const AddMovieButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const CloseButton = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  &::before,
  &::after {
    content: ' ';
    position: absolute;
    left: 15px;
    height: 33px;
    width: 2px;
    background-color: ${colors.white};
  }
  &:hover::before,
  &:hover::after {
    content: ' ';
    position: absolute;
    left: 15px;
    height: 33px;
    width: 2px;
    background-color: ${colors.coral};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
