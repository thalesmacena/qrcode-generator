import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;

  @media (max-width: 720px) {
    margin-bottom: 30px;
  }

  input {
    appearance: none;
  }

  label {
    position: relative;
    color: ${({ theme }) => theme.colors.labelNotSelected};
    cursor: pointer;
    display: block;
    font-weight: bold;
    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.textInBackground};
    }

    &::after {
      position: absolute;
      content: '';
      height: 2px;
      width: 0%;

      margin: 0 auto;
      bottom: -4px;
      left: 0;
      right: 0;

      transition: 0.5s;

      background: ${({ theme }) => theme.colors.labelNotSelected};
    }

    &:hover::after {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.textInBackground};
    }
  }

  input:checked + label {
    color: ${({ theme }) => theme.colors.textInBackground};

    &::after {
      position: absolute;
      content: '';
      height: 2px;
      width: 100%;

      margin: 0 auto;
      bottom: -4px;
      left: 0;
      right: 0;

      transition: 0.5s;

      background-color: ${({ theme }) => theme.colors.textInBackground};
    }
  }
`;
