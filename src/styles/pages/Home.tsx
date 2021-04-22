import { QRCode } from 'react-qr-svg';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: 80px auto;

  max-width: 800px;
  width: 100%;
  padding: 30px 30px;

  // Glassmorphism
  background: ${({ theme }) => theme.backgroundContainer};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 10px 10px;
    margin: 30px 0;
  }

  section {
    display: block;
    height: 300px;
    background: ${({ theme }) => theme.colors.background};
    border: ${({ theme }) => theme.border};
    padding: 5px;
    border-radius: 10px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    text-align: center;
  }
`;

export const QR = styled(QRCode).attrs((props) => ({
  bgColor: props.theme.colors.background,
  fgColor: props.theme.colors.primary
}))``;
