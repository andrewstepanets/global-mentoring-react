import styled from 'styled-components';

export const PostersOverviewWrapper = styled.div`
  padding: 0 30px 30px;
`;

export const PostersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const PostersListItem = styled.li`
  margin: 0 15px;
`;

export const PostersWrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: grey;
`;

export const PostersTitle = styled.h2`
  font-size: 22px;
`;

export const PostersTitleYear = styled.span`
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const PostersImg = styled.img`
  width: 320px;
  height: 455px;
`;

export const PostersGenre = styled.p`
  padding-bottom: 15px;
  color: grey;
`;
