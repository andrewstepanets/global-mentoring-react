import styled from 'styled-components';
import {
  colors,
  colorsRgba,
  mediaQueries,
  rgbaMap,
} from '../../styles/constants';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  padding: 20px 55px;
  color: ${colors.white};
  border-radius: 10px;
  background-color: ${rgbaMap(colorsRgba.rgba_grey_dark, 0.7)};
  ${mediaQueries('sizeXXL')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const MovieDetailsImage = styled.img`
  width: 300px;
  height: 350px;
  ${mediaQueries('sizeXXL')`
     width: 250px;
  `}
`;

export const MovieDetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 55px;
  ${mediaQueries('sizeXXL')`
    align-items: center;
  `}
`;

export const MovieDetailsTitle = styled.h3`
  margin-right: 20px;
  font-size: 35px;
  font-weight: 100;
`;

export const MovieDetailsWin = styled.span`
  padding: 5px;
  font-size: 15px;
  font-weight: 100;
`;

export const MovieDetailsDate = styled.div`
  display: flex;
  justify-content: end;
  padding: 5px;
`;

export const MovieDetailsYear = styled.span`
  margin-right: 20px;
  font-size: 18px;
  color: ${colors.coral};
`;

export const MovieDetailsTime = styled.span`
  font-size: 18px;
  color: ${colors.coral};
`;

export const MovieDetailsArticle = styled.p`
  font-size: 16px;
  font-weight: 100;
  line-height: 1.7;
`;

export const MovieDetailsAverage = styled.span`
  width: 50px;
  height: 50px;
  padding: 13px 10px 10px 10px;
  font-size: 20px;
  border: 1px solid ${colors.white};
  border-radius: 50%;
  color: green;
`;

export const MovieDetailsTitleContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const MovieDetailsError = styled.div`
  margin: 50px;
  color: ${colors.white};
  font-weight: 200;
  font-size: 32px;
  text-align: center;
`;
