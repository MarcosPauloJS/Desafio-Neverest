import { createGlobalStyle} from "styled-components"
import BGPattern from '../../public/img/bg_pattern.jpg'

const colors = {
  body: '#111111',
  text: '#FFFFFF',
  primaryColor: '#EB3547',
  contrastColor: '#9f2632',
  toggleBorder: '#FFF',
  background: '#363537',
}

const fonts = {
  small: 12,
  medium: 18,
  big: 24,
  bigger:  36,
  biggest: 48
}

const sizes = [0, 2, 4, 8, 12, 16, 18, 20, 24, 28, 30];

export const CustomTheme = {
  colors,
  sizes,
  fonts,
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Teko', Roboto, sans-serif;
  }

  body {
    background-image: url(${BGPattern.src});
    background-size: cover;
    background-repeat: repeat;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Teko', Roboto, sans-serif;
    transition: all 0.50s linear;
    
    &:after {
      content: "";
      position: fixed;
      top:0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${({ theme }) => theme.colors.body};
      background: linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(36,38,38,1) 100%);
      z-index: -1000;
      opacity: 0.97;
    }
  }
`