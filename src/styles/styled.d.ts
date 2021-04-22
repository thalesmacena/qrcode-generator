import 'styled-components';

interface Theme {
  colors: {
    background: string;
    inputBackground: string;
    primary: string;
    text: string;
    textInBackground: string;
    labelNotSelected: string;
    switch: string;
  };
  background: string;
  backgroundContainer: string;
  boxShadow: string;
  border: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
