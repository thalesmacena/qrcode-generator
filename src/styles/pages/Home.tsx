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
`;

export const QRSection = styled.div`
  margin: 0 auto;
  display: block;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  width: 300px;
  height: 340px;

  border: ${({ theme }) => theme.border};
  border-radius: 10px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  h1 {
    font: 700 24px 'Inter';
  }

  img {
    width: 80px;
    height: 80px;
    border: 3px solid #fff;

    position: absolute;
    left: calc(300px / 2 - 40px);
    top: calc(340px / 2 - 50px);
  }

  input {
    display: none;
  }

  label {
    cursor: pointer;
    display: block;
    font: 700 24px 'Inter';
  }

  strong {
    transition: 0.2s;
    color: ${({ theme }) => theme.colors.labelNotSelected};
    &:hover {
      color: ${({ theme }) => theme.colors.textInBackground};
    }
  }
`;

export const QR = styled(QRCode).attrs((props) => ({
  bgColor: props.theme.colors.background,
  fgColor: props.theme.colors.primary
}))``;
