import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const DropdownMenuContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
`;

export const DropdownMenuMoreMenu = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;
  width: 220px;
  padding: 10px;
  margin-top: 10px;
  background-color: ${colors.grey_dark};
  border-radius: 5px;
  transform: translate(0, 15px) scale(0.95);
`;

export const DropdownMenuButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  color: ${colors.white};
  background: none;
  text-align: left;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: ${colors.coral};
  }
`;

export const DropdownMenuSpan = styled.span`
  display: inline-block;
  margin: 0 auto;
  width: 7px;
  height: 7px;
  margin-right: 3px;
  background-color: ${colors.grey_light};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const DropdownMenuItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const DropdownMenuItem = styled.li`
  display: block;
`;

export const DropdownMenuDots = styled.button`
  width: 100%;
  padding: 15px;
  text-align: left;
  font-size: 18px;
  color: ${colors.white};
  background: none;
  outline: none;
  cursor: pointer;
  :hover ${DropdownMenuSpan} {
    background-color: ${colors.coral};
  }
`;
