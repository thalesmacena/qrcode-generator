import { MdBrightnessHigh, MdBrightnessLow } from 'react-icons/md';
import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const LightSwitch = styled(MdBrightnessHigh)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.switch};
`;

export const DarkSwitch = styled(MdBrightnessLow)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.switch};
`;
