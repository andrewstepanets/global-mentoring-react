import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, colorsRgba, rgbaMap } from '../../../../styles/constants';

export const PostersItem = styled.li`
  margin: 15px;
  padding: 15px;
  height: 620px;
  box-shadow: 0 4px 8px 0 ${rgbaMap(colorsRgba.rgba_white, 0.2)};
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 ${rgbaMap(colorsRgba.rgba_white, 0.2)};
  }
`;

export const PostersLink = styled(Link)`
  cursor: pointer;
`;

export const PostersWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 10px 0;
  color: ${colors.grey_native};
`;

export const PostersTitle = styled.h2`
  font-size: 20px;
`;

export const PostersTitleYear = styled.span`
  align-self: center;
  padding: 5px;
  font-size: 12px;
  white-space: nowrap;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const PostersImg = styled.img`
  width: 300px;
  height: 455px;
`;

export const PostersGenre = styled.p`
  padding-bottom: 15px;
  width: 300px;
  color: ${colors.grey_native};
`;
