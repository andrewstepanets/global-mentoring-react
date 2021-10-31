import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { colors, colorsRgba, rgbaMap } from '../../styles/constants';

export const EditMovieFormWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${rgbaMap(colorsRgba.rgba_grey_dark, 0.7)};
`;

export const EditMovieFormContainer = styled.div`
  position: relative;
  max-width: 780px;
  width: 95%;
  margin: auto;
  padding: 20px 30px;
  color: ${colors.white};
  background-color: ${colors.grey_dark};
  border-radius: 5px;
`;

export const EditMovieFormInner = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  div:last-child {
    grid-column: 1 / 3;
  }
`;

export const EditMovieFormTitle = styled.h2`
  margin: 20px 0;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
`;

export const EditMovieButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  :hover {
    color: #f65261;
  }
`;

export const EditMovieFormError = styled.div`
  height: 10px;
  padding-top: 3px;
  font-size: 11px;
  color: ${colors.coral};
`;
