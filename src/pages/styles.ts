import styled from 'styled-components';
import { colors } from '../styles/constants';

export const NoMatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  font-weight: 100;
  font-family: Montserrat, Arial, sans-serif;
  background-color: ${colors.grey_dark};
`;

export const NoMatchImage = styled.img`
  width: 50%;
  margin-top: 70px;
  margin-bottom: 100px;
`;

export const NoMatchMessage = styled.p`
  padding: 30px;
  font-size: 35px;
  color: ${colors.white};
`;
