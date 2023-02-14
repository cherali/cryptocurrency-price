export interface ThemeProviderProps {
  children: ReactNode;
}


interface IColor {
  main: string;
  light?: string;
  lightest?: string;
  dark?: string;
  darkest?: string;
}


export interface IPallete {
  primary: IColor;
  white: IColor;
  black: IColor;
  gray: IColor;
  green: IColor;
  red: IColor;
}


export interface ITheme {
  pallete: IPallete;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {
  }
}

