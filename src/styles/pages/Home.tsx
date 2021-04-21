import { MdBrightnessHigh, MdBrightnessLow } from 'react-icons/md';
import JSONInput from 'react-json-editor-ajrm';
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

  header {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }

  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 10px 10px;
    margin: 30px 0;
  }

  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  main {
    padding: 5px;
    margin-bottom: 5px;
    height: 310px;
  }

  textarea {
    width: 400px;
    height: 300px;
    border: none;
    resize: none;
    padding: 5px;
    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.textInBackground};
  }

  form {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
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

export const LightSwitch = styled(MdBrightnessHigh)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.switch};
`;

export const DarkSwitch = styled(MdBrightnessLow)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.switch};
`;

export const InputJSON = styled(JSONInput).attrs(() => ({
  height: 300,
  width: 400
}))``;

export const QR = styled(QRCode).attrs((props) => ({
  bgColor: props.theme.colors.background,
  fgColor: props.theme.colors.primary
}))``;
