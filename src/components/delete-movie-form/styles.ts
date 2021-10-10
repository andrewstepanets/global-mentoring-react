import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { colors, colorsRgba, rgbaMap } from '../../styles/constants';

export const DeleteMovieWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${rgbaMap(colorsRgba.rgba_grey_dark, 0.7)};
`;

export const DeleteMovieContainer = styled.div`
  position: relative;
  max-width: 780px;
  width: 95%;
  margin: auto;
  padding: 20px 30px;
  color: ${colors.white};
  background-color: ${colors.grey_dark};
  border-radius: 5px;
`;

export const DeleteMovieText = styled.p`
  padding: 50px;
  font-size: 20px;
`;

export const DeleteMovieTitle = styled.h2`
  padding: 85px 0 0 50px;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 40px 40px 40px;
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
