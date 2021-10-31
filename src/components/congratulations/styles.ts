import { AiOutlineClose } from 'react-icons/ai';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const CongratulationsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: fixed;
  top: 350px;
  left: 50%;
  min-width: 320px;
  color: ${colors.white};
  background-color: ${colors.grey_dark};
  border-radius: 4px;
  z-index: 10;
  transform: translate(-50%, -50%);
`;

export const CongratulationsText = styled.p`
  padding: 50px;
  font-size: 20px;
  text-align: center;
`;

export const CongratulationsTitle = styled.h2`
  margin: 0 auto;
  padding-top: 40px;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 1.2;
`;

export const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  :hover {
    color: ${colors.coral};
  }
`;

export const DoneIcon = styled(IoMdCheckmarkCircle)`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 50px;
  color: ${colors.coral};
`;
