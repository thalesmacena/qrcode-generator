import styled from 'styled-components';

export const ContainerInputText = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  height: 310px;

  textarea {
    width: 400px;
    height: 300px;
    border: none;
    resize: none;
    padding: 5px;
    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.textInBackground};
  }
`;
