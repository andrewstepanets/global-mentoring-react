import { BiCalendar } from 'react-icons/bi';
import styled from 'styled-components';

export const ReleaseDatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  .react-datepicker__triangle {
    display: none;
  }
`;

export const ReleaseDatePickerIcon = styled(BiCalendar)`
  position: absolute;
  top: 53px;
  right: 20px;
  width: 30px;
  height: 30px;
  color: #f65261;
  cursor: pointer;
`;
