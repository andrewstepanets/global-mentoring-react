import styled from 'styled-components';
import backgroundImage from '../../assets/images/error-boundary.png';
import { colors } from '../../styles/constants';

export const ErrorIndicatorWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  font-weight: 100;
  font-family: Montserrat, Arial, sans-serif;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

export const ErrorIndicatorMessage = styled.h2`
  font-size: 35px;
  color: ${colors.grey_dark};
`;
