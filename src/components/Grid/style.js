import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.bigger}px;
  font-weight: bold;
  margin: ${props => props.theme.sizes[5]}px 0;
  text-shadow: 0.05px 0.5px 5px #000;
`
export const Paragraph = styled.h1`
  font-size: ${props => props.theme.fonts.big}px;
  font-weight: bold;
  margin: ${props => props.theme.sizes[5]}px 0;
  text-shadow: 0.05px 0.5px 5px #000;
`
export const Spotlight = styled.strong`
  font-weight: bold;
  color:  ${props => props.theme.colors.primaryColor};
`

export const WrapperImage = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
`